const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
const AUTH_LOAD = "AUTH_LOAD";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_ERROR = "REGISTER_ERROR";
const AUTH_LOADING = "AUTH-LOADING";
const LOGOUT = "LOGOUT";
const AUTH_ERROR = "AUTH_ERROR";
const LOGIN_START = "LOGIN_START";
const REGISTER_START = "REGISTER_START";
const USER_LIST = "USER_LIST";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
  user: null,
  users: [],
  error: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_START: {
      return {
        loading: true,
      };
    }
    case AUTH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case USER_LIST: {
      return {
        ...state,
        users: payload.users,
        loading: false,
      };
    }
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case AUTH_LOAD:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload.user,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: payload.token,
        isAuthenticated: true,
        loading: false,
        user: payload.user,
      };
    case AUTH_ERROR:
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: true,
      };
    case REGISTER_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: true,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        error: false,
        token: null,
      };

    default:
      return state;
  }
}

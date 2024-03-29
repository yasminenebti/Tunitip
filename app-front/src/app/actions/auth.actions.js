import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const REGISTER_ERROR = "REGISTER_ERROR";
const AUTH_ERROR = "AUTH_ERROR";
const AUTH_LOAD = "AUTH_LOAD";
const AUTH_LOADING = "AUTH_LOADING";
const LOGIN_START = "LOGIN_START";
const REGISTER_START = "REGISTER_START";
const LOGOUT = "LOGOUT";
const USER_LIST = "USER_LIST";

export const userList = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/auth/userList");
    dispatch({
      type: USER_LIST,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error,
    });
  }
};

export const load = () => async (dispatch) => {
  dispatch({
    type: AUTH_LOADING,
  });
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
  try {
    const res = await axios.get("http://localhost:5000/api/auth/authcheck");
    dispatch({
      type: AUTH_LOAD,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: error,
    });
  }
};

export const login = (data) => async (dispatch) => {
  dispatch({
    type: LOGIN_START,
  });
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    setAuthToken(res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_ERROR,
      payload: error,
    });
  }
};

export const register = (data) => async (dispatch) => {
  dispatch({
    type: REGISTER_START,
  });
  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/register",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_ERROR,
      payload: error,
    });
  }
};
export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};

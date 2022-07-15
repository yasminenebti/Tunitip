import axios from "axios";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";
//const REGISTER_SUCCESS = "REGISTER_SUCCESS";
//const REGISTER_ERROR = "REGISTER_ERROR";
//const AUTH_ERROR = "AUTH_ERROR";

export const login = (data) => async (dispatch) => {
  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    console.log(res);
  } catch (message) {
    dispatch({
      type: LOGIN_ERROR,
      payload: message.error,
    });
  }
};

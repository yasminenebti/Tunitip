import axios from "axios";
const GET_TIPS = "GET_TIPS";
const GET_TIP = "GET_TIP";
const TIPS_ERROR = "TIPS_ERROR";
const GET_TIPS_BY_CATEGORY = "GET_TIPS_BY_CATEGORY";
const GET_MY_TIPS = "GET_MY_TIPS";
const DELETE_TIP = "DELETE_TIP";
const TIPS_LOADING = "TIPS_LOADING";
const CREATE_TIP = "CREATE_TIP";

export const createTip = (data) => async (dispatch) => {
  dispatch({
    type: TIPS_LOADING,
  });
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/api/tips",
      data,
      config
    );

    dispatch({
      type: CREATE_TIP,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TIPS_ERROR,
      payload: err,
    });
  }
};

export const getTips = (limit) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/tips?limit=${limit}`
    );
    dispatch({
      type: GET_TIPS,
      payload: res.data,
    });
    console.log(res);
  } catch (error) {
    dispatch({
      type: TIPS_ERROR,
      payload: error,
    });
  }
};
export const getMyTips = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/tips/myTrips`);
    dispatch({
      type: GET_MY_TIPS,
      payload: res.data,
    });
    console.log(res);
  } catch (error) {
    dispatch({
      type: TIPS_ERROR,
      payload: error,
    });
  }
};
export const getTipByCategory = (categoryId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/tips?category=${categoryId}`
    );
    dispatch({
      type: GET_TIPS_BY_CATEGORY,
      payload: res.data,
    });
  } catch (message) {
    dispatch({
      type: TIPS_ERROR,
      payload: message.error,
    });
  }
};

export const getTip = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/tips/${id}`);
    dispatch({
      type: GET_TIP,
      payload: res.data,
    });
  } catch (message) {
    dispatch({
      type: TIPS_ERROR,
      payload: message.error,
    });
  }
};

export const deleteTip = (id) => async (dispatch) => {
  dispatch({
    type: TIPS_LOADING,
  });
  try {
    const res = await axios.delete(`http://localhost:5000/api/tips/${id}`);
    dispatch({
      type: DELETE_TIP,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: TIPS_ERROR,
      payload: error,
    });
  }
};

import axios from "axios";
const GET_TIPS = "GET_TIPS";
const GET_TIP = "GET_TIP";
const TIPS_ERROR = "TIPS_ERROR";
const GET_TIPS_BY_CATEGORY = "GET_TIPS_BY_CATEGORY";

export const getTips = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/tips");
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

import axios from "axios";
const GET_CATEGORIES = "GET_CATEGORIES";
const CATEGORIES_ERROR = "CATEGORIES_ERROR";

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/category");
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data,
    });
    console.log(res);
  } catch (error) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: error,
    });
  }
};

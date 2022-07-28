import axios from "axios";
const GET_CATEGORIES = "GET_CATEGORIES";
const CREATE_CATEGORIES = "CREATE_CATEGORIES";
const DELETE_CATEGORY = "DELETE_CATEGORY";
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

export const createCategories = (data) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:5000/api/category",
      data,
      config
    );

    dispatch({
      type: CREATE_CATEGORIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: err,
    });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:5000/api/category/${id}`);
    dispatch({
      type: DELETE_CATEGORY,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORIES_ERROR,
      payload: error,
    });
  }
};

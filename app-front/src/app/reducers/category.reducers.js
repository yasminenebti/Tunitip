const GET_CATEGORIES = "GET_CATEGORIES";
const CATEGORIES_ERROR = "CATEGORIES_ERROR";

const initialState = {
  categories: [],
  category: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        tips: payload.tips,
        loading: false,
      };

    case CATEGORIES_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}

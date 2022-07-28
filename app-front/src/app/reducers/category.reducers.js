const GET_CATEGORIES = "GET_CATEGORIES";
const CATEGORIES_ERROR = "CATEGORIES_ERROR";
const CREATE_CATEGORIES = "CREATE_CATEGORIES";
const DELETE_CATEGORY = "DELETE_CATEGORY";

const initialState = {
  categories: [],
  category: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_CATEGORIES:
      return {
        ...state,
        categories: [...state.categories, payload.category],
        loading: false,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload.categories,
        loading: false,
      };

    case CATEGORIES_ERROR:
      return {
        ...state,
        error: payload,
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          (cat) => cat._id !== payload.cat._id
        ),
        loading: false,
      };
    default:
      return state;
  }
}

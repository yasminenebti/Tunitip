const GET_TIPS = "GET_TIPS";
const GET_TIP = "GET_TIP";
const TIPS_ERROR = "TIPS_ERROR";
const GET_MY_TIPS = "GET_MY_TIPS";

const DELETE_TIP = "DELETE_TIP";
const CREATE_TIP = "CREATE_TIP";
const GET_TIPS_BY_CATEGORY = "GET_TIPS_BY_CATEGORY";
const SEARCH_TIP = "SEARCH_TIP";
const TIP_START = "TIP_START";
const UPDATE_TIP = "UPDATE_TIP";


const initialState = {
  tip: null,
  tips: [],
  loading: false,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TIP_START: {
      return {
        loading: true,
      };
    }
    case SEARCH_TIP:
      return {
        ...state,
        tips: payload.tips,
        loading: false,
      };
    case UPDATE_TIP: {
      return {
        ...state,
        loading: false,
      };
    }
    case CREATE_TIP: {
      return {
        ...state,
        tips: [...state.tips, payload.tip],
        loading: false,
      };
    }

    case GET_MY_TIPS:
      return {
        ...state,
        tips: payload.tips,
        loading: false,
      };
    
    case GET_TIPS:
      return {
        ...state,
        tips: payload.tips,
        loading: false,
      };

    case GET_TIPS_BY_CATEGORY:
      return {
        ...state,
        tips: payload.tips,
        loading: false,
      };
    case GET_TIP:
      return {
        ...state,
        tip: payload.tip,
        loading: false,
      };

    case DELETE_TIP:
      return {
        ...state,
        tips: state.tips.filter((tip) => tip._id !== payload.tip._id),
        loading: false,
      };
    case TIPS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

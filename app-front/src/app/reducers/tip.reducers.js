const GET_TIPS = "GET_TIPS";
const GET_TIP = "GET_TIP";
const TIPS_ERROR = "TIPS_ERROR";
const GET_TIPS_BY_CATEGORY = "GET_TIPS_BY_CATEGORY";

const initialState = {
  tips: [],
  tip: null,
  loading: true,
  error: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TIPS:
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
    case TIPS_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}

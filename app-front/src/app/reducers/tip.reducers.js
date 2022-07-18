const GET_TIPS = "GET_TIPS";
const GET_TIP = "GET_TIP";
const TIPS_ERROR = "TIPS_ERROR";

const initialState = {
  tips: [],
  tip: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_TIPS:
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

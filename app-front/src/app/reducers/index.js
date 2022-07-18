import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import tipReducers from "./tip.reducers";

export default combineReducers({
  tipState: tipReducers,
  authState: authReducers,
});

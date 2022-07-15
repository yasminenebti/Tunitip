import { combineReducers } from "redux";
import authReducers from "./auth.reducers";

export default combineReducers({
  authState: authReducers,
});

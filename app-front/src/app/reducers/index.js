import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import categoryReducers from "./category.reducers";
import tipReducers from "./tip.reducers";

export default combineReducers({
  categoryState: categoryReducers,
  tipState: tipReducers,
  authState: authReducers,
});

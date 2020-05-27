import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import userReducer from "./userReducer";
import courseCategoryReducer from "./courseCategoryReducer";
const rootReducer = combineReducers({
  courseReducer,
  userReducer,
  courseCategoryReducer,
});
export default rootReducer;

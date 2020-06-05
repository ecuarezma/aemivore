import { combineReducers } from "redux";
import authReducer from "./authReducer";
import blogReducer from "./blogReducer";
import formReducer from "./formReducer";

export default combineReducers({
  auth: authReducer,
  blog: blogReducer,
  form: formReducer,
});

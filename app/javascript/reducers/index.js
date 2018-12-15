import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import header from "./headerReducer";
import user from "./userReducer";

export default combineReducers({
  header,
  form: formReducer,
  user,
});

import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import header from "./header";
import user from "./user";

export default combineReducers({
  header,
  form: formReducer,
  user,
});

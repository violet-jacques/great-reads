import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import header from "./header";
import modal from "./modal";
import user from "./user";

export default combineReducers({
  header,
  form: formReducer,
  modal,
  user,
});

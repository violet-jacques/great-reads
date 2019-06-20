import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form/immutable";

import search from "./search";
import header from "./header";
import modal from "./modal";
import user from "./user";

export default combineReducers({
  header,
  form: formReducer,
  modal,
  search,
  user,
});

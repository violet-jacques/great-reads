import { Map } from "immutable";

import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from "../actionTypes";

const initialState = Map({
  email: "",
  firstName: "",
  id: "",
  isLoggedIn: false,
  lastName: "",
  errors: Map({
    loginErrorMessage: "",
    signUpErrorMessage: "",
  }),
});

export default (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case LOGIN_FAILURE:
      return state.setIn(["errors", "loginErrorMessage"], payload);
    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
      return state.set("email", payload.get("email"))
        .set("id", payload.get("id"))
        .set("firstName", payload.get("first_name"))
        .set("isLoggedIn", true)
        .set("lastName", payload.get("last_name"));
    case SIGN_UP_FAILURE:
    return state.setIn(["errors", "signUpErrorMessage"], payload);
    default:
      return state;
  }
};

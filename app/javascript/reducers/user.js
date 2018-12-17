import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoggedIn: false,
};

export default (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case LOGIN_FAILURE:
      return {
        ...state,
        loginErrorMessage: payload,
      };
    case LOGIN_SUCCESS: {
      const { email, first_name, id, last_name } = payload;

      return {
        ...state,
        email,
        firstName: first_name,
        id,
        isLoggedIn: true,
        lastName: last_name,
      };
    }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpErrorMessage: payload,
      };
    case SIGN_UP_SUCCESS: {
      const { email, first_name, id, last_name } = payload;

      return {
        ...state,
        email,
        firstName: first_name,
        id,
        isLoggedIn: true,
        lastName: last_name,
      };
    }
    default:
      return state;
  }
};

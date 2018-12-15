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
      const { email, id } = payload;

      return {
        ...state,
        email,
        id,
        isLoggedIn: true,
      };
    }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpErrorMessage: payload,
      };
    case SIGN_UP_SUCCESS: {
      const { email, id } = payload;

      return {
        ...state,
        email,
        id,
        isLoggedIn: true,
      };
    }
    default:
      return state;
  }
};

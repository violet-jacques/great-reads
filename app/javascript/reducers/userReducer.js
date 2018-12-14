const initialState = {
  isLoggedIn: false,
};

export default (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case 'LOGIN_FAILURE':
      return {
        ...state,
        loginErrorMessage: payload,
      };
    case 'LOGIN_SUCCESS': {
      const { email, id, role } = payload;

      return {
        ...state,
        email,
        id,
        isLoggedIn: true,
        role,
      };
    }
    case 'SIGN_UP_FAILURE':
      return {
        ...state,
        signUpErrorMessage: payload,
      };
    case 'SIGN_UP_SUCCESS': {
      const { email, id, role } = payload;

      return {
        ...state,
        email,
        id,
        isLoggedIn: true,
        role,
      };
    }

    default:
      return state;
  }
};

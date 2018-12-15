import userReducer from "../../reducers/userReducer";

describe("userReducer", () => {
  describe("initialState", () => {
    it("initializes correctly", () => {
      const expectedState = { isLoggedIn: false };

      expect(userReducer(undefined, {})).toEqual(expectedState);
    });
  });

  describe("LOGIN_SUCCESS", () => {
    it("updates the stae with user information", () => {
      const currentState = { isLoggedIn: false };
      const action = {
        type: "LOGIN_SUCCESS",
        payload: {
          email: "test@example.com",
          id: 1,
        },
      };
      const expectedState = {
        email: "test@example.com",
        id: 1,
        isLoggedIn: true,
      };

      expect(userReducer(currentState, action)).toEqual(expectedState);
    });
  });

  describe("LOGIN_FAILURE", () => {
    it("updates the stae with user information", () => {
      const currentState = { isLoggedIn: false };
      const action = {
        type: "LOGIN_FAILURE",
        payload: "Example error message",
      };
      const expectedState = {
        loginErrorMessage: "Example error message",
        isLoggedIn: false,
      };

      expect(userReducer(currentState, action)).toEqual(expectedState);
    });
  });

  describe("SIGN_UP_SUCCESS", () => {
    it("updates the stae with user information", () => {
      const currentState = { isLoggedIn: false };
      const action = {
        type: "SIGN_UP_SUCCESS",
        payload: {
          email: "test@example.com",
          id: 1,
        },
      };
      const expectedState = {
        email: "test@example.com",
        id: 1,
        isLoggedIn: true,
      };

      expect(userReducer(currentState, action)).toEqual(expectedState);
    });
  });

  describe("SIGN_UP_FAILURE", () => {
    it("updates the stae with user information", () => {
      const currentState = { isLoggedIn: false };
      const action = {
        type: "SIGN_UP_FAILURE",
        payload: "Example error message",
      };
      const expectedState = {
        signUpErrorMessage: "Example error message",
        isLoggedIn: false,
      };

      expect(userReducer(currentState, action)).toEqual(expectedState);
    });
  });
});

import { Map } from "immutable";

import userReducer from "../../reducers/user";

describe("userReducer", () => {
  describe("initialState", () => {
    it("initializes correctly", () => {
      const expectedState = Map({
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

      expect(userReducer(undefined, {}).equals(expectedState)).toBe(true);
    });
  });

  describe("LOGIN_SUCCESS", () => {
    it("updates the stae with user information", () => {
      const currentState = Map({
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

      const action = {
        type: "LOGIN_SUCCESS",
        payload: Map({
          email: "test@example.com",
          id: 1,
          first_name: "sup",
          last_name: "dawg",
        }),
      };

      const expectedState = Map({
        email: "test@example.com",
        id: 1,
        isLoggedIn: true,
        firstName: "sup",
        lastName: "dawg",
        errors: Map({
          loginErrorMessage: "",
          signUpErrorMessage: "",
        }),
      });

      expect(userReducer(currentState, action).equals(expectedState)).toBe(true);
    });
  });

  describe("LOGIN_FAILURE", () => {
    it("updates the stae with user information", () => {
      const currentState = Map({
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

      const action = {
        type: "LOGIN_FAILURE",
        payload: "Example error message",
      };
      const expectedState = Map({
        email: "",
        firstName: "",
        id: "",
        isLoggedIn: false,
        lastName: "",
        errors: Map({
          loginErrorMessage: "Example error message",
          signUpErrorMessage: "",
        }),
      });

      expect(userReducer(currentState, action).equals(expectedState)).toBe(true);
    });
  });

  describe("SIGN_UP_SUCCESS", () => {
    it("updates the stae with user information", () => {
      const currentState = Map({
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

      const action = {
        type: "SIGN_UP_SUCCESS",
        payload: Map({
          email: "test@example.com",
          id: 1,
          first_name: "sup",
          last_name: "dawg",
        }),
      };
      const expectedState = Map({
        email: "test@example.com",
        id: 1,
        isLoggedIn: true,
        firstName: "sup",
        lastName: "dawg",
        errors: Map({
          loginErrorMessage: "",
          signUpErrorMessage: "",
        }),
      });

      expect(userReducer(currentState, action).equals(expectedState)).toBe(true);
    });
  });

  describe("SIGN_UP_FAILURE", () => {
    it("updates the stae with user information", () => {
      const currentState = Map({
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

      const action = {
        type: "SIGN_UP_FAILURE",
        payload: "Example error message",
      };
      const expectedState = Map({
        email: "",
        firstName: "",
        id: "",
        isLoggedIn: false,
        lastName: "",
        errors: Map({
          loginErrorMessage: "",
          signUpErrorMessage: "Example error message",
        }),
      });

      expect(userReducer(currentState, action).equals(expectedState)).toBe(true);
    });
  });
});

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import signUpAction from "../../../actions/userActions/signUpAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("signUpAction", () => {
  describe("successful sign up", () => {
    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponse(JSON.stringify({
        success: true,
        user: { id: 1, email: "hey" },
      }));
    });

    it("signs up the user and updates the state with the response", () => {
      const form = {
        email: "hello@example.com",
        password: "password",
        password_confirmation: "password",
      };

      const expectedAction = {
        type: "SIGN_UP_SUCCESS",
        payload: { id: 1, email: "hey" },
      };
      const secondExpectedAction = {
        type: "TOGGLE_MODAL",
      };

      return store.dispatch(signUpAction(form))
        .then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toBe(2);
          expect(expectedActions).toContainEqual(expectedAction);
          expect(expectedActions).toContainEqual(secondExpectedAction);
        });
    });
  });

  describe("unsuccessful sign up", () => {
    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponse(JSON.stringify({
        error: "Email already in use",
      }));
    });

    it("doesnt sign up the user and update the sign up error state ", () => {
      const newStore = mockStore();
      const form = {
        email: "slime",
        password: "password",
        password_confirmation: "password",
      };
      const expectedAction = {
        type: "SIGN_UP_FAILURE",
        payload: "Email already in use",
      };

      return newStore.dispatch(signUpAction(form))
        .then(() => {
          const expectedActions = newStore.getActions();
          expect(expectedActions.length).toBe(1);
          expect(expectedActions).toContainEqual(expectedAction);
        });
    });
  });
});

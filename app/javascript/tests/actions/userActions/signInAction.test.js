import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import signInAction from "../../../actions/userActions/signInAction";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("signInAction", () => {
  describe("successful sign in", () => {
    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponse(JSON.stringify({
        success: true,
        user: { id: 1, email: "hey" },
      }));
    });

    it("signs in the user and updates the state with the response", () => {
      const form = { email: "hello@example.com", password: "password" };
      const expectedAction = {
        type: "LOGIN_SUCCESS",
        payload: { id: 1, email: "hey" },
      };
      const secondExpectedAction = {
        type: "HIDE_MODAL",
      };

      return store.dispatch(signInAction(form))
        .then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toBe(2);
          expect(expectedActions).toContainEqual(expectedAction);
          expect(expectedActions).toContainEqual(secondExpectedAction);
        });
    });
  });

  describe("unsuccessful sign in", () => {
    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponse(JSON.stringify({
        error: "Email invalid",
      }));
    });

    it("signs in the user and updates the state with the response", () => {
      const newStore = mockStore();
      const form = { email: "slime", password: "password" };
      const expectedAction = {
        type: "LOGIN_FAILURE",
        payload: "Email invalid",
      };

      return newStore.dispatch(signInAction(form))
        .then(() => {
          const expectedActions = newStore.getActions();
          expect(expectedActions.length).toBe(1);
          expect(expectedActions).toContainEqual(expectedAction);
        });
    });
  });
});

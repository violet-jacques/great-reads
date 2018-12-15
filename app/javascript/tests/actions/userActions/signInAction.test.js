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
      const history = { goBack: jest.fn() };
      const form = { email: "hello@example.com", password: "password" };
      const expectedAction = {
        type: "LOGIN_SUCCESS",
        payload: { id: 1, email: "hey" },
      };

      return store.dispatch(signInAction(history, form))
        .then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toBe(1);
          expect(expectedActions).toContainEqual(expectedAction);
          expect(history.goBack.mock.calls.length).toEqual(1);
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
      const history = { goBack: jest.fn() };
      const form = { email: "slime", password: "password" };
      const expectedAction = {
        type: "LOGIN_FAILURE",
        payload: "Email invalid",
      };

      return newStore.dispatch(signInAction(history, form))
        .then(() => {
          const expectedActions = newStore.getActions();
          expect(expectedActions.length).toBe(1);
          expect(expectedActions).toContainEqual(expectedAction);
          expect(history.goBack.mock.calls.length).toEqual(0);
        });
    });
  });
});

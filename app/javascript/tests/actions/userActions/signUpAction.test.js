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
      const history = { push: jest.fn() };
      const form = {
        email: "hello@example.com",
        password: "password",
        password_confirmation: "password",
      };

      const expectedAction = {
        type: "SIGN_UP_SUCCESS",
        payload: { id: 1, email: "hey" },
      };

      return store.dispatch(signUpAction(history, form))
        .then(() => {
          const expectedActions = store.getActions();
          expect(expectedActions.length).toBe(1);
          expect(expectedActions).toContainEqual(expectedAction);
          expect(history.push.mock.calls.length).toEqual(1);
          expect(history.push.mock.calls[0][0]).toEqual("/");
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
      const history = { goBack: jest.fn() };
      const form = {
        email: "slime",
        password: "password",
        password_confirmation: "password",
      };
      const expectedAction = {
        type: "SIGN_UP_FAILURE",
        payload: "Email already in use",
      };

      return newStore.dispatch(signUpAction(history, form))
        .then(() => {
          const expectedActions = newStore.getActions();
          expect(expectedActions.length).toBe(1);
          expect(expectedActions).toContainEqual(expectedAction);
          expect(history.goBack.mock.calls.length).toEqual(0);
        });
    });
  });
});

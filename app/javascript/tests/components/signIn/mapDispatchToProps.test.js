import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Map } from "immutable";

import mapDispatchToProps from "../../../components/signIn/mapDispatchToProps";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("mapDispatchToProps", () => {
  const store = mockStore();

  describe("onSubmit", () => {
    const props = mapDispatchToProps(store.dispatch);
    const { onSubmit } = props;
    const form = { email: "test@example.com", password: "password" };

    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponse(JSON.stringify({
        success: true,
        user: { id: 1, email: "hey", role: "sup" },
      }));
    });

    it("dispatches the correct actions", () => {
      const expectedAction = {
        payload: Map({
          email: "hey",
          id: 1,
          role: "sup",
        }),
        type: "LOGIN_SUCCESS",
      };

      onSubmit(form)
        .then(() => {
          expect(store.getActions()).toContainEqual(expectedAction);
        });
    });
  });

  describe("register", () => {
    const store = mockStore();
    const props = mapDispatchToProps(store.dispatch);

    it("dispatches the correct action", () => {
      const { register } = props;

      const expectedAction = {
        type: "SET_MODAL_TYPE",
        payload: "signUp",
      };

      register();

      expect(store.getActions()).toContainEqual(expectedAction);
    });
  });
});

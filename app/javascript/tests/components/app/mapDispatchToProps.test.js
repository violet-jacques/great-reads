import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Map } from "immutable";

import mapDispatchToProps from "../../../components/app/mapDispatchToProps";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("mapDispatchToProps", () => {
  const store = mockStore();

  describe("signIn", () => {
    const props = mapDispatchToProps(store.dispatch);
    const { signIn } = props;
    const id = 5;

    beforeEach(() => {
      global.fetch.resetMocks();
      global.fetch.mockResponse(Map({
        success: true,
        user: Map({ id: 5, email: "hey", role: "sup" }),
      }));
    });

    it("dispatches the correct actions", () => {
      const expectedAction = {
        payload: Map({
          email: "hey",
          id: 5,
          role: "sup",
        }),
        type: "LOGIN_SUCCESS",
      };

      signIn(id)
        .then(() => {
          expect(store.getActions()).toContainEqual(expectedAction);
        });
    });
  });
});

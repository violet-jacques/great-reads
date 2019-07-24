import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import mapDispatchToProps from "../../../../components/header/account/mapDispatchToProps";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("mapDispatchToProps", () => {
  describe("signIn", () => {
    const store = mockStore();
    const props = mapDispatchToProps(store.dispatch);
    const { signIn } = props;

    it("returns the expected actions", () => {
      const expectedAction = {
        type: "SHOW_MODAL",
      };
      const secondExpectedAction = {
        type: "SET_MODAL_TYPE",
        payload: "signIn",
      };
      signIn();

      expect(store.getActions()).toContainEqual(expectedAction);
      expect(store.getActions()).toContainEqual(secondExpectedAction);
    });
  });
});

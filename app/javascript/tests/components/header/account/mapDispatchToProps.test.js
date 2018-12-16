import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import mapDispatchToProps from "../../../../components/header/account/mapDispatchToProps";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("mapDispatchToProps", () => {
  describe("setActiveNavItem", () => {
    const store = mockStore();
    const props = mapDispatchToProps(store.dispatch);
    const { setActiveNavItem } = props;
    const navItem = "navItem";

    it("returns the expected action", () => {
      const expectedAction = {
        type: "SET_ACTIVE_NAV_ITEM",
        payload: navItem,
      };
      setActiveNavItem(navItem)();

      expect(store.getActions()).toContainEqual(expectedAction);
    });
  });

  describe("signIn", () => {
    const store = mockStore();
    const props = mapDispatchToProps(store.dispatch);
    const { signIn } = props;
    const navItem = "navItem";

    it("returns the expected actions", () => {
      const expectedAction = {
        type: "TOGGLE_MODAL",
      };
      const secondExpectedAction = {
        type: "SET_MODAL_TYPE",
        payload: "signIn",
      };
      signIn();

      expect(store.getActions()).toContainEqual(expectedAction);
      expect(store.getActions()).toContainEqual(expectedAction);
    });
  });
});

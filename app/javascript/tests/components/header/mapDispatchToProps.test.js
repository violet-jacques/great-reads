import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import mapDispatchToProps from "../../../components/header/mapDispatchToProps";

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
        payload: navItem,
        type: "SET_ACTIVE_NAV_ITEM",
      };
      setActiveNavItem(navItem)();

      expect(store.getActions()).toContainEqual(expectedAction);
    });
  });
});

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import mapDispatchToProps from "../../../components/header/mapDispatchToProps";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("mapDispatchToProps", () => {
  describe("setActiveNavItem", () => {
    const ownProps = {
      history: {
        push: jest.fn(),
      },
    };
    const store = mockStore();
    const props = mapDispatchToProps(store.dispatch, ownProps);
    const { setActiveNavItem } = props;
    const navItem = "navItem";

    it("returns the expected action", () => {
      const expectedAction = {
        payload: navItem,
        type: "SET_ACTIVE_NAV_ITEM",
      };
      setActiveNavItem(navItem)();

      expect(store.getActions()).toContainEqual(expectedAction);
      expect(ownProps.history.push.mock.calls.length).toBe(0);
    });

    describe("with a path", () => {
      const path = "/path";
      it("returns the expected action", () => {
        const expectedAction = {
          payload: navItem,
          type: "SET_ACTIVE_NAV_ITEM",
        };
        setActiveNavItem(navItem, path)();

        expect(store.getActions()).toContainEqual(expectedAction);
        expect(ownProps.history.push.mock.calls.length).toBe(1);
      });
    });
  });
});

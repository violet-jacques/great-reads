import { Map } from "immutable";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import mapDispatchToProps from "../../../../components/header/community/mapDispatchToProps";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("mapDispatchToProps", () => {
  const props = mapDispatchToProps(store.dispatch);

  describe("showDropdown", () => {
    const { showDropdown } = props;

    it("returns the expected action", () => {
      const expectedAction = {
        type: "TOGGLE_HEADER_DROPDOWN",
        payload: Map({
          navItem: "community",
          value: true,
        }),
      };
      showDropdown();

      expect(store.getActions()).toContainEqual(expectedAction);
    });
  });

  describe("hideDropdown", () => {
    const { hideDropdown } = props;

    it("returns the expected action", () => {
      const firstExpectedAction = {
        type: "TOGGLE_HEADER_DROPDOWN",
        payload: Map({
          navItem: "community",
          value: false,
        }),
      };
      const secondexpectedAction = {
        type: "SET_ACTIVE_NAV_ITEM",
        payload: "",
      };
      hideDropdown();

      expect(store.getActions()).toContainEqual(firstExpectedAction);
      expect(store.getActions()).toContainEqual(secondexpectedAction);
    });
  });

  describe("setActiveNavItem", () => {
    const { setActiveNavItem } = props;

    it("returns the expected action", () => {
      const expectedAction = {
        type: "SET_ACTIVE_NAV_ITEM",
        payload: "community",
      };
      setActiveNavItem();

      expect(store.getActions()).toContainEqual(expectedAction);
    });
  });
});

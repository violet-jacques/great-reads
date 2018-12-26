import { Map } from "immutable";

import headerActions from "../../actions/headerActions";
import { SET_ACTIVE_NAV_ITEM, TOGGLE_HEADER_DROPDOWN } from "../../actionTypes";

describe("headerActions", () => {
  const { setActiveNavItem, toggleHeaderDropdown } = headerActions;

  describe("setActiveNavItem", () => {
    const activeNavItem = "Sup";

    it("returns an object with a type and payload key value pair", () => {
      expect(setActiveNavItem(activeNavItem)).toEqual({
        type: SET_ACTIVE_NAV_ITEM,
        payload: activeNavItem,
      });
    });
  });

  describe("toggleHeaderDropdown", () => {
    const navItem = "Sup";
    const value = false;

    it("returns an object with a type and payload key value pair", () => {
      expect(toggleHeaderDropdown(navItem, value)).toEqual({
        type: TOGGLE_HEADER_DROPDOWN,
        payload: Map({
          navItem,
          value,
        }),
      });
    });
  });
});

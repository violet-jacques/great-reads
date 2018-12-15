import genericAction from "./genericAction";
import { SET_ACTIVE_NAV_ITEM, TOGGLE_HEADER_DROPDOWN } from "../actionTypes";

export default {
  setActiveNavItem: activeNavItem => {
    return genericAction(
      SET_ACTIVE_NAV_ITEM,
      activeNavItem,
    );
  },

  toggleHeaderDropdown: (navItem, value) => {
    return genericAction(
      TOGGLE_HEADER_DROPDOWN,
      { navItem, value }
    );
  }
};

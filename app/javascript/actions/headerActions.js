import { Map } from "immutable";

import genericAction from "./genericAction";
import { TOGGLE_HEADER_DROPDOWN } from "../actionTypes";

export default {
  toggleHeaderDropdown: (navItem, value) => {
    return genericAction(
      TOGGLE_HEADER_DROPDOWN,
      Map({ navItem, value }),
    );
  },
};

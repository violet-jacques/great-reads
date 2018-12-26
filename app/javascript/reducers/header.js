import { Map } from "immutable";

import { SET_ACTIVE_NAV_ITEM, TOGGLE_HEADER_DROPDOWN } from "../actionTypes";


const initialState = Map({
  activeNavItem: "",
  dropdowns: Map({
    browse: false,
    community: false,
  }),
});

export default (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case SET_ACTIVE_NAV_ITEM:
    return state.set("activeNavItem", payload);
    case TOGGLE_HEADER_DROPDOWN:
      return state.setIn(
        ["dropdowns", payload.get("navItem")],
        payload.get("value"),
      );
    default:
      return state;
    }
};

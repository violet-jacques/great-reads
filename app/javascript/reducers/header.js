import { Map } from "immutable";

import { TOGGLE_HEADER_DROPDOWN } from "../actionTypes";

const initialState = Map({
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
    case TOGGLE_HEADER_DROPDOWN:
      return state.setIn(
        ["dropdowns", payload.get("navItem")],
        payload.get("value"),
      );
    default:
      return state;
    }
};

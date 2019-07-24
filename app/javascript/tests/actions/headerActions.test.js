import { Map } from "immutable";

import headerActions from "../../actions/headerActions";
import { TOGGLE_HEADER_DROPDOWN } from "../../actionTypes";

describe("headerActions", () => {
  const { toggleHeaderDropdown } = headerActions;

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

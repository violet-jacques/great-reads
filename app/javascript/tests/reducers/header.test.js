import { Map } from "immutable";

import headerReducer from "../../reducers/header";

describe("headerReducer", () => {
  describe("initialState", () => {
    it("initializes correctly", () => {
      const expectedState = Map({
        activeNavItem: "",
        dropdowns: Map({
          browse: false,
          community: false,
        }),
      });

      expect(headerReducer(undefined, {}).equals(expectedState)).toBe(true);
    });
  });

  describe("SET_ACTIVE_NAV_ITEM", () => {
    it("updates the stae with user information", () => {
      const currentState = Map({
        activeNavItem: "",
        dropdowns: Map({
          browse: false,
          community: false,
        }),
      });
      const action = {
        type: "SET_ACTIVE_NAV_ITEM",
        payload: "Hey",
      };
      const expectedState = Map({
        activeNavItem: "Hey",
        dropdowns: Map({
          browse: false,
          community: false,
        }),
      });

      expect(headerReducer(currentState, action).equals(expectedState)).toBe(true);
    });
  });

  describe("TOGGLE_HEADER_DROPDOWN", () => {
    it("updates the state with user information", () => {
      const currentState = Map({
        activeNavItem: "",
        dropdowns: Map({
          browse: false,
          community: false,
        }),
      });
      const action = {
        type: "TOGGLE_HEADER_DROPDOWN",
        payload: Map({
          navItem: "browse",
          value: true,
        }),
      };
      const expectedState = Map({
        activeNavItem: "",
        dropdowns: Map({
          browse: true,
          community: false,
        }),
      });

      expect(headerReducer(currentState, action).equals(expectedState)).toBe(true);
    });
  });
});

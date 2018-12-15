import headerReducer from "../../reducers/headerReducer";

describe("headerReducer", () => {
  describe("initialState", () => {
    it("initializes correctly", () => {
      const expectedState = {
        activeNavItem: "",
        dropdowns: {
        browse: false,
          community: false,
        }
      };

      expect(headerReducer(undefined, {})).toEqual(expectedState);
    });
  });

  describe("SET_ACTIVE_NAV_ITEM", () => {
    it("updates the stae with user information", () => {
      const currentState = {
        activeNavItem: "",
        dropdowns: {
          browse: false,
          community: false,
        }
      };
      const action = {
        type: "SET_ACTIVE_NAV_ITEM",
        payload: "Hey",
      };
      const expectedState = {
        activeNavItem: "Hey",
        dropdowns: {
          browse: false,
          community: false,
        }
      };

      expect(headerReducer(currentState, action)).toEqual(expectedState);
    });
  });

  describe("TOGGLE_HEADER_DROPDOWN", () => {
    it("updates the stae with user information", () => {
      const currentState = {
        activeNavItem: "",
        dropdowns: {
          browse: false,
          community: false,
        }
      };
      const action = {
        type: "TOGGLE_HEADER_DROPDOWN",
        payload: {
          navItem: "browse",
          value: true,
        },
      };
      const expectedState = {
        activeNavItem: "",
        dropdowns: {
          browse: true,
          community: false,
        }
      };

      expect(headerReducer(currentState, action)).toEqual(expectedState);
    });
  });
});

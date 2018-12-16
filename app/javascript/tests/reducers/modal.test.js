import modalReducer from "../../reducers/modal";

describe("modalReducer", () => {
  describe("initialState", () => {
    it("initializes correctly", () => {
      const expectedState = { open: false, type: "" };

      expect(modalReducer(undefined, {})).toEqual(expectedState);
    });
  });

  describe("HIDE_MODAL", () => {
    it("updates the state to close modal", () => {
      const currentState = { open: true, type: "" };
      const action = {
        type: "HIDE_MODAL",
      };
      const expectedState = {
        open: false,
        type: "",
      };

      expect(modalReducer(currentState, action)).toEqual(expectedState);
    });
  });

  describe("SHOW_MODAL", () => {
    it("updates the state to open modal", () => {
      const currentState = { open: false, type: "" };
      const action = {
        type: "SHOW_MODAL",
      };
      const expectedState = {
        open: true,
        type: "",
      };

      expect(modalReducer(currentState, action)).toEqual(expectedState);
    });
  });

  describe("SET_MODAL_TYPE", () => {
    it("updates the state with the modal type", () => {
      const currentState = { open: false, type: "" };
      const action = {
        type: "SET_MODAL_TYPE",
        payload: "type",
      };
      const expectedState = {
        open: false,
        type: "type",
      };

      expect(modalReducer(currentState, action)).toEqual(expectedState);
    });
  });
});

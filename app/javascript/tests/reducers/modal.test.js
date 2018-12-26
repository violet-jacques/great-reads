import { Map } from "immutable";

import modalReducer from "../../reducers/modal";

describe("modalReducer", () => {
  describe("initialState", () => {
    it("initializes correctly", () => {
      const expectedState = Map({ open: false, type: "" });

      expect(modalReducer(undefined, {}).equals(expectedState)).toBe(true);
    });
  });

  describe("HIDE_MODAL", () => {
    it("updates the state to close modal", () => {
      const currentState = Map({ open: true, type: "" });
      const action = { type: "HIDE_MODAL" };
      const expectedState = Map({ open: false, type: "" });

      expect(modalReducer(currentState, action).equals(expectedState)).toBe(true);
    });
  });

  describe("SHOW_MODAL", () => {
    it("updates the state to open modal", () => {
      const currentState = Map({ open: false, type: "" });
      const action = { type: "SHOW_MODAL" };
      const expectedState = Map({ open: true, type: "" });

      expect(modalReducer(currentState, action).equals(expectedState)).toBe(true);
    });
  });

  describe("SET_MODAL_TYPE", () => {
    it("updates the state with the modal type", () => {
      const currentState = Map({ open: false, type: "" });
      const action = { type: "SET_MODAL_TYPE", payload: "type" };
      const expectedState = Map({ open: false, type: "type" });

      expect(modalReducer(currentState, action).equals(expectedState)).toBe(true);
    });
  });
});

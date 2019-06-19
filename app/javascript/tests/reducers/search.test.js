import { List, Map } from "immutable";

import searchReducer from "../../reducers/search";

describe("searchReducer", () => {
  describe("initialState", () => {
    it("initializes correctly", () => {
      const expectedState = Map({
        books: List(),
      });

      expect(searchReducer(undefined, {}).equals(expectedState)).toBe(true);
    });
  });

  describe("SEARCH_SUCCESS", () => {
    it("updates the stae with book information", () => {
      const currentState = Map({
        books: List(),
      });

      const action = {
        type: "SEARCH_SUCCESS",
        payload: List([Map({id: "3", title: "hey"})]),
      };
      const expectedState = Map({
        books: List([Map({id: "3", title: "hey"})]),
      });

      expect(searchReducer(currentState, action).equals(expectedState)).toBe(true);
    });
  });
});

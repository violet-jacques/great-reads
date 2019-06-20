import { List, Map } from "immutable";

import searchReducer from "../../reducers/search";

describe("searchReducer", () => {
  describe("initialState", () => {
    it("initializes correctly", () => {
      const expectedState = Map({
        books: List(),
        query: "",
        scope: "all",
      });

      expect(searchReducer(undefined, {}).equals(expectedState)).toBe(true);
    });
  });

  describe("SEARCH_SUCCESS", () => {
    describe("with scope", () => {
      it("updates the stae with book information", () => {
        const currentState = Map({
          books: List(),
          query: "",
          scope: "all",
        });

        const books = List([Map({id: "3", title: "hey"})]);
        const query = "hey";
        const scope = "title";

        const action = {
          type: "SEARCH_SUCCESS",
          payload: Map({ books, query, scope }),
        };
        const expectedState = Map({
          books: List([Map({id: "3", title: "hey"})]),
          query: "hey",
          scope: "title",
        });

        expect(searchReducer(currentState, action).equals(expectedState)).toBe(true);
      });
    });

    describe("without scope", () => {
      it("updates the stae with book information", () => {
        const currentState = Map({
          books: List(),
          query: "",
          scope: "all",
        });

        const books = List([Map({id: "3", title: "hey"})]);
        const query = "hey";

        const action = {
          type: "SEARCH_SUCCESS",
          payload: Map({ books, query }),
        };
        const expectedState = Map({
          books: List([Map({id: "3", title: "hey"})]),
          query: "hey",
          scope: "all",
        });

        expect(searchReducer(currentState, action).equals(expectedState)).toBe(true);
      });
    });
  });
});

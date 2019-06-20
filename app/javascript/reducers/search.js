import { List, Map } from "immutable";

import { SEARCH_SUCCESS } from "../actionTypes";

const initialState = Map({
  books: List(),
  query: "",
  scope: "all",
});

export default (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case SEARCH_SUCCESS:
      return state
        .set("books", payload.get("books"))
        .set("query", payload.get("query"))
        .set("scope", payload.get("scope") || "all" )
    default:
      return state;
  }
};

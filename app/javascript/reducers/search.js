import { List, Map } from "immutable";

import { SEARCH_SUCCESS } from "../actionTypes";

const initialState = Map({
  books: List(),
});

export default (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case SEARCH_SUCCESS:
      return state.set("books", payload);
    default:
      return state;
  }
};

import { Map, List } from "immutable";

import mapStateToProps from "../../../pages/search/mapStateToProps";

describe("mapStateToProps", () => {
  const state = Map({
    search: Map({
      books: List([1]),
    }),
  });

  const props = mapStateToProps(state);

  it("contains the search query", () => {
    expect(props.books).toEqual(List([1]));
  });
});

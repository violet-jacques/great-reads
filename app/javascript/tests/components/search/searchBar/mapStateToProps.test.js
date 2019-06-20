import { Map } from "immutable";

import mapStateToProps from "../../../../components/search/searchBar/mapStateToProps";

describe("mapStateToProps", () => {
  const state = Map({
    search: Map({
      query: "Hey",
    }),
  });

  const props = mapStateToProps(state);

  it("contains the search query", () => {
    expect(props.query).toEqual("Hey");
  });
});

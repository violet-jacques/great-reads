import React from "react";
import { Map } from "immutable";

import testHelpers from "../../../helpers";
import SearchBar from "../../../../components/search/searchBar";

describe("SearchBar", () => {
  let wrapper;

  beforeEach(() => {
    const state = Map({
      search: Map({
        query: "hey",
      }),
    });

    wrapper = testHelpers.mountWithRouter(<SearchBar />, state);
  });

  it("renders", () => {
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  });
});

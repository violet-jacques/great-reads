import React from "react";
import testHelpers from "../../../helpers";
import SearchBar from "../../../../components/search/searchBar";

describe("SearchBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = testHelpers.mountWithRouter(<SearchBar />);
  });

  it("renders", () => {
    expect(wrapper.find(SearchBar)).toHaveLength(1);
  });
});

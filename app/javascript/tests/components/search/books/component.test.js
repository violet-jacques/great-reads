import React from "react";
import testHelpers from "../../../helpers";
import Books from "../../../../components/search/books";

describe("Books", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = testHelpers.mountWithRouter(<Books />);
  });

  it("renders", () => {
    expect(wrapper.find(Books)).toHaveLength(1);
  });
});

import React from "react";
import testHelpers from "../../../helpers";
import AddBook from "../../../../components/search/addBook";

describe("AddBook", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = testHelpers.mountWithRouter(<AddBook />);
  });

  it("renders", () => {
    expect(wrapper.find(AddBook)).toHaveLength(1);
  });
});

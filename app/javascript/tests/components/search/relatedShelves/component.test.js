import React from "react";
import testHelpers from "../../../helpers";
import RelatedShelves from "../../../../components/search/relatedShelves";

describe("RelatedShelves", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = testHelpers.mountWithRouter(<RelatedShelves />);
  });

  it("renders", () => {
    expect(wrapper.find(RelatedShelves)).toHaveLength(1);
  });
});

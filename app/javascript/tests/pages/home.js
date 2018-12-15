import React from "react";
import testHelpers from "../helpers";
import Home from "../../pages/HomePage";

describe("Home", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = testHelpers.mount(<Home />);
  });

  it("renders", () => {
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});

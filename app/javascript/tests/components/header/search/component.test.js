import { Map } from "immutable";
import React from "react";
import testHelpers from "../../../helpers";
import Search from "../../../../components/header/search";
import SearchForm from "../../../../forms/headerSearch";

describe("Search", () => {
  let wrapper;
  const onSubmit = jest.fn();
  const history = jest.fn();

  beforeEach(() => {
    const state = Map({
      header: Map({}),
      search: Map({
        query: "hey",
      }),
    });

    const props = {
      activeDetermination: jest.fn(),
      onClick: jest.fn(),
      onSubmit,
      history,
    };

    wrapper = testHelpers.mountWithRouter(<Search {...props} />, state);
  });

  it("renders", () => {
    expect(wrapper.find(Search)).toHaveLength(1);
  });

  it("renders the search form", () => {
    expect(wrapper.find(SearchForm)).toHaveLength(1);
  });
});

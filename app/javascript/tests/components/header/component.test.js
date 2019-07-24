import { Map } from "immutable";
import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import testHelpers from "../../helpers";

describe("Header", () => {
  let wrapper;
  const state = Map({
    user: Map({
      isLoggedIn: false,
    }),
    header: Map({
      dropdowns: Map({
        browse: false,
        community: false,
      }),
    }),
  });

  beforeEach(() => {
    wrapper = testHelpers.mountWithRouter(<Header />, state);
  });

  it("renders", () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  describe("dropdown", () => {
    describe("when all dropdowns are false", () => {
      it("doesnt render any dropdowns", () => {
        expect(wrapper.find(".header--dropdown").exists()).toEqual(false);
      });
    });

    describe("when a dropdown is true", () => {
      const newState = state.setIn(["header", "dropdowns", "browse"], true);

      beforeEach(() => {
        wrapper = testHelpers.mountWithRouter(<Header />, newState);
      });

      it("renders a dropdown", () => {
        expect(wrapper.find(".header--dropdown").exists()).toEqual(true);
      });
    });
  });

  describe("account link", () => {
    describe("when the user is logged in", () => {
      const newState = state.setIn(["user", "isLoggedIn"], true);

      beforeEach(() => {
        wrapper = testHelpers.mountWithRouter(<Header />, newState);
      });

      it("renders a link to the account page", () => {
        expect(wrapper.find(Link).last().props().to).toEqual("/account");
      });
    });

    describe("when the user is not logged in", () => {
      it("renders the sign in modal", () => {
        wrapper.find("li").last().prop("onClick")();
        const firstExpectedAction = {
          type: "SHOW_MODAL",
        };
        const secondExpectedAction = {
          type: "SET_MODAL_TYPE",
          payload: "signIn",
        };

        expect(wrapper.props().store.getActions()).toContainEqual(firstExpectedAction);
        expect(wrapper.props().store.getActions()).toContainEqual(secondExpectedAction);
      });
    });
  });
});

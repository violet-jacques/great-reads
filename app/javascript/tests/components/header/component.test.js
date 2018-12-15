import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import testHelpers from "../../helpers";

describe("Header", () => {
  let wrapper;
  const state = {
    user: {
      isLoggedIn: false,
    },
    header: {
      activeNavItem: "",
      dropdowns: {
        browse: false,
        community: false,
      }
    }
  };

  beforeEach(() => {
    wrapper = testHelpers.mountWithRouter(<Header />, state);
  });

  it("renders", () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  describe("activeNavItem", () => {
    const newState = {
      ...state,
      header: {
        ...state.header,
        activeNavItem: "home"
      }
    };
    beforeEach(() => {
      wrapper = testHelpers.mountWithRouter(<Header />, newState);
    });

    it("renders a link to the account page", () => {
      expect(wrapper.find("li").at(1).hasClass("header--nav-item-active")).toEqual(true);
    });
  });

  describe("dropdown", () => {
    describe("when all dropdowns are false", () => {
      it("doesnt render any dropdowns", () => {
        expect(wrapper.find(".header--dropdown").exists()).toEqual(false);
      });
    });

    describe("when a dropdown is true", () => {
      const newState = {
        ...state,
        header: {
          ...state.header,
          dropdowns: {
            ...state.header.dropdowns,
            browse: true,
          }
        }
      };
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
      const newState = {
        ...state,
        user: {
          isLoggedIn: true,
        },
      };

      beforeEach(() => {
        wrapper = testHelpers.mountWithRouter(<Header />, newState);
      });

      it("renders a link to the account page", () => {
        expect(wrapper.find(Link).last().props().to).toEqual("/account");
      });
    });

    describe("when the user is not logged in", () => {
      it("renders a link to the sign-in page", () => {
        expect(wrapper.find(Link).last().props().to).toEqual("/sign-in");
      });
    });
  });
});

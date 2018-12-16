import React from "react";
import { Link } from "react-router-dom";

import Account from "../../../../components/header/account";
import testHelpers from "../../../helpers";

describe("Account", () => {
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

  const props = {
    activeDetermination: jest.fn(),
  };

  beforeEach(() => {
    wrapper = testHelpers.mountWithRouter(<Account {...props} />, state);
  });

  it("renders", () => {
    expect(wrapper.find(Account)).toHaveLength(1);
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
        wrapper = testHelpers.mountWithRouter(<Account {...props} />, newState);
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

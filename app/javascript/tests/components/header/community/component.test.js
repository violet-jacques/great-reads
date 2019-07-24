import { Map } from "immutable";
import React from "react";

import Community from "../../../../components/header/community";
import testHelpers from "../../../helpers";

describe("Community", () => {
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
  const props = {
    activeDetermination: jest.fn(),
  };

  beforeEach(() => {
    wrapper = testHelpers.mountWithRouter(<Community {...props} />, state);
  });

  it("renders", () => {
    expect(wrapper.find(Community)).toHaveLength(1);
  });

  describe("dropdown", () => {
    let wrapper;
    const newState = state.setIn(["header", "dropdowns", "community"], true);

    beforeEach(() => {
      wrapper = testHelpers.mount(<Community {...props} />, newState);
    });

    it("renders the dropdown if dropdownOpen is true", () => {
      expect(wrapper.find(".header--dropdown").exists()).toEqual(true);
    });
  });

  describe("handleClick", () => {
    describe("when activeItem is empty", () => {
      describe("when dropdown is closed", () => {
        it("sets active nav item to community and opens the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const expectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: Map({
              navItem: "community",
              value: true,
            }),
          };

          expect(wrapper.props().store.getActions()).toContainEqual(expectedAction);
        });
      });

      describe("when dropdown is open", () => {
        let wrapper;
        const newState = state.setIn(["header", "dropdowns", "community"], true);

        beforeEach(() => {
          wrapper = testHelpers.mount(<Community {...props} />, newState);
        });

        it("closes the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const expectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: Map({
              navItem: "community",
              value: false,
            }),
          };

          expect(wrapper.props().store.getActions()).toContainEqual(expectedAction);
        });
      });
    });

    describe("when click on community", () => {
      let wrapper;

      beforeEach(() => {
        wrapper = testHelpers.mount(<Community {...props} />, state);
      });
      describe("when dropdown is closed", () => {
        it("opens the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const expectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: Map({
              navItem: "community",
              value: true,
            }),
          };

          expect(wrapper.props().store.getActions()).toContainEqual(expectedAction);
        });
      });

      describe("when dropdown is open", () => {
        let wrapper;
        const newState = state.setIn(["header", "dropdowns", "community"], true);

        beforeEach(() => {
          wrapper = testHelpers.mount(<Community {...props} />, newState);
        });

        it("closes the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const expectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: Map({
              navItem: "community",
              value: false,
            }),
          };

          expect(wrapper.props().store.getActions()).toContainEqual(expectedAction);
        });
      });
    });
  });
});

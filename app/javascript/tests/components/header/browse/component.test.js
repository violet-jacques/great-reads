import { Map } from "immutable";
import React from "react";

import Browse from "../../../../components/header/browse";
import headerActions from "../../../../actions/headerActions";
import testHelpers from "../../../helpers";

describe("Browse", () => {
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
    wrapper = testHelpers.mountWithRouter(<Browse { ...props } />, state);
  });

  it("renders", () => {
    expect(wrapper.find(Browse)).toHaveLength(1);
  });

  describe("dropdown", () => {
    let wrapper;
    const newState = state.setIn(["user", "isLoggedIn"], false)
      .setIn(["header", "dropdowns", "browse"], true);

    beforeEach(() => {
      wrapper = testHelpers.mount(<Browse {...props} />, newState);
    });

    it("renders the dropdown if dropdownOpen is true", () => {
      expect(wrapper.find(".header--dropdown").exists()).toEqual(true);
    });
  });

  describe("handleClick", () => {
    describe("when activeItem is empty", () => {
      describe("when dropdown is closed", () => {
        it("sets active nav item to browse and opens the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const expectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: Map({
              navItem: "browse",
              value: true,
            }),
          };

          expect(wrapper.props().store.getActions()).toContainEqual(expectedAction);
        });
      });

      describe("when dropdown is open", () => {
        let wrapper;
        const newState = state.setIn(["user", "isLoggedIn"], false)
          .setIn(["header", "dropdowns", "browse"], true);

        beforeEach(() => {
          wrapper = testHelpers.mount(<Browse {...props} />, newState);
        });

        it("sets closes the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const expectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: Map({
              navItem: "browse",
              value: false,
            }),
          };

          expect(wrapper.props().store.getActions()).toContainEqual(expectedAction);
        });
      });
    });

    describe("when click on browse", () => {
      let wrapper;
      const newState = state.setIn(["user", "isLoggedIn"], false)

      beforeEach(() => {
        wrapper = testHelpers.mount(<Browse {...props} />, newState);
      });
      describe("when dropdown is closed", () => {
        it("opens the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const expectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: Map({
              navItem: "browse",
              value: true,
            }),
          };

          expect(wrapper.props().store.getActions()).toContainEqual(expectedAction);
        });
      });

      describe("when dropdown is open", () => {
        let wrapper;
        const newState = state.setIn(["user", "isLoggedIn"], false)
          .setIn(["header", "dropdowns", "browse"], true);


        beforeEach(() => {
          wrapper = testHelpers.mount(<Browse {...props} />, newState);
        });

        it("closes the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const expectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: Map({
              navItem: "browse",
              value: false,
            }),
          };

          expect(wrapper.props().store.getActions()).toContainEqual(expectedAction);
        });
      });
    });
  });
});

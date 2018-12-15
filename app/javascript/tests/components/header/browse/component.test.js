import React from "react";

import Browse from "../../../../components/header/browse";
import headerActions from "../../../../actions/headerActions";
import testHelpers from "../../../helpers";

describe("Browse", () => {
  let wrapper;
  const { setActiveNavItem, toggleHeaderDropdown } = headerActions;
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
    wrapper = testHelpers.mountWithRouter(<Browse { ...props } />, state);
  });

  it("renders", () => {
    expect(wrapper.find(Browse)).toHaveLength(1);
  });

  describe("dropdown", () => {
    let wrapper;
    const newState = {
      user: {
        isLoggedIn: false,
      },
      header: {
        activeNavItem: "",
        dropdowns: {
          browse: true,
          community: false,
        }
      }
    };
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
          const firstExpectedAction = {
            type: "SET_ACTIVE_NAV_ITEM",
            payload: "browse",
          };
          const secondExpectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: {
              navItem: "browse",
              value: true,
            }
          };

          expect(wrapper.props().store.getActions()).toContainEqual(firstExpectedAction);
          expect(wrapper.props().store.getActions()).toContainEqual(secondExpectedAction);
        });
      });

      describe("when dropdown is open", () => {
        let wrapper;
        const newState = {
          user: {
            isLoggedIn: false,
          },
          header: {
            activeNavItem: "",
            dropdowns: {
              browse: true,
              community: false,
            }
          }
        };

        beforeEach(() => {
          wrapper = testHelpers.mount(<Browse {...props} />, newState);
        });

        it("sets activeNavItem and closes the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const firstExpectedAction = {
            type: "SET_ACTIVE_NAV_ITEM",
            payload: "browse",
          };
          const secondExpectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: {
              navItem: "browse",
              value: false,
            }
          };

          expect(wrapper.props().store.getActions()).toContainEqual(firstExpectedAction);
          expect(wrapper.props().store.getActions()).toContainEqual(secondExpectedAction);
        });
      });
    });

    describe("when activeNavItem is browse", () => {
      let wrapper;
      const newState = {
        user: {
          isLoggedIn: false,
        },
        header: {
          activeNavItem: "browse",
          dropdowns: {
            browse: false,
            community: false,
          }
        }
      };

      beforeEach(() => {
        wrapper = testHelpers.mount(<Browse {...props} />, newState);
      });
      describe("when dropdown is closed", () => {
        it("opens the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const firstExpectedAction = {
            type: "SET_ACTIVE_NAV_ITEM",
            payload: "browse",
          };
          const secondExpectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: {
              navItem: "browse",
              value: true,
            }
          };

          expect(wrapper.props().store.getActions()).not.toContainEqual(firstExpectedAction);
          expect(wrapper.props().store.getActions()).toContainEqual(secondExpectedAction);
        });
      });

      describe("when dropdown is open", () => {
        let wrapper;
        const newState = {
          user: {
            isLoggedIn: false,
          },
          header: {
            activeNavItem: "browse",
            dropdowns: {
              browse: true,
              community: false,
            }
          }
        };

        beforeEach(() => {
          wrapper = testHelpers.mount(<Browse {...props} />, newState);
        });

        it("sets activeNavItem and closes the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const firstExpectedAction = {
            type: "SET_ACTIVE_NAV_ITEM",
            payload: "browse",
          };
          const secondExpectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: {
              navItem: "browse",
              value: false,
            }
          };

          expect(wrapper.props().store.getActions()).not.toContainEqual(firstExpectedAction);
          expect(wrapper.props().store.getActions()).toContainEqual(secondExpectedAction);
        });
      });
    });
  });
});

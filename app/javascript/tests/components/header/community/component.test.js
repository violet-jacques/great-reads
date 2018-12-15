import React from "react";

import Community from "../../../../components/header/community";
import headerActions from "../../../../actions/headerActions";
import testHelpers from "../../../helpers";

describe("Community", () => {
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
    wrapper = testHelpers.mountWithRouter(<Community {...props} />, state);
  });

  it("renders", () => {
    expect(wrapper.find(Community)).toHaveLength(1);
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
          browse: false,
          community: true,
        }
      }
    };
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
          const firstExpectedAction = {
            type: "SET_ACTIVE_NAV_ITEM",
            payload: "community",
          };
          const secondExpectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: {
              navItem: "community",
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
              browse: false,
              community: true,
            }
          }
        };

        beforeEach(() => {
          wrapper = testHelpers.mount(<Community {...props} />, newState);
        });

        it("sets activeNavItem and closes the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const firstExpectedAction = {
            type: "SET_ACTIVE_NAV_ITEM",
            payload: "community",
          };
          const secondExpectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: {
              navItem: "community",
              value: false,
            }
          };

          expect(wrapper.props().store.getActions()).toContainEqual(firstExpectedAction);
          expect(wrapper.props().store.getActions()).toContainEqual(secondExpectedAction);
        });
      });
    });

    describe("when activeNavItem is community", () => {
      let wrapper;
      const newState = {
        user: {
          isLoggedIn: false,
        },
        header: {
          activeNavItem: "community",
          dropdowns: {
            browse: false,
            community: false,
          }
        }
      };

      beforeEach(() => {
        wrapper = testHelpers.mount(<Community {...props} />, newState);
      });
      describe("when dropdown is closed", () => {
        it("opens the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const firstExpectedAction = {
            type: "SET_ACTIVE_NAV_ITEM",
            payload: "community",
          };
          const secondExpectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: {
              navItem: "community",
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
            activeNavItem: "community",
            dropdowns: {
              browse: false,
              community: true,
            }
          }
        };

        beforeEach(() => {
          wrapper = testHelpers.mount(<Community {...props} />, newState);
        });

        it("sets activeNavItem and closes the dropdown", () => {
          wrapper.find("li").prop("onClick")();
          const firstExpectedAction = {
            type: "SET_ACTIVE_NAV_ITEM",
            payload: "community",
          };
          const secondExpectedAction = {
            type: "TOGGLE_HEADER_DROPDOWN",
            payload: {
              navItem: "community",
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

import React from "react";
import testHelpers from "../../helpers";
import Footer from "../../../components/layout/footer";
import Header from "../../../components/header";
import Layout from "../../../components/layout";
import Modal from "../../../components/modal";

describe("Layout", () => {
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
    },
    modal: {
      open: false,
    },
  };

  beforeEach(() => {
    wrapper = testHelpers.mountWithRouter(<Layout />, state);
  });

  it("renders", () => {
    expect(wrapper.find(Layout)).toHaveLength(1);
  });

  it("renders the header", () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it("renders the footer", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it("renders its childen", () => {
    const FakeComponent = () => <h1>Sup</h1>;

    const newWrapper = testHelpers.mountWithRouter(
      <Layout><FakeComponent /></Layout>,
      state,
    );

    expect(newWrapper.find(FakeComponent)).toHaveLength(1);
  });

  it("does not render the modal by default", () => {
    expect(wrapper.find(Modal)).toHaveLength(0);
  });

  describe("when the modalOpen prop is true", () => {
    const newState = {
      ...state,
      modal: {
        open: true,
      }
    };

    beforeEach(() => {
      wrapper = testHelpers.mountWithRouter(<Layout />, newState);
    });

    it("renders the modal component", () => {
      expect(wrapper.find(Modal)).toHaveLength(1);
    });
  });
});

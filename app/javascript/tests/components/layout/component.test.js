import React from "react";
import testHelpers from "../../helpers";
import Layout from "../../../components/layout/component";
import Header from "../../../components/header";
import Footer from "../../../components/layout/footer";

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
    }
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
});

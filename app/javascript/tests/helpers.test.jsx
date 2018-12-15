import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import helpers from "./helpers";

describe("mountWithRouter", () => {
  it("renders the component with a router", () => {
    const FakeComponent = () => <div>Hello</div>;
    const wrapper = helpers.mountWithRouter(<FakeComponent />);

    expect(wrapper.find(Router)).toHaveLength(1);
  });
});

describe("mountWithStore", () => {
  it("renders the component with a store", () => {
    const FakeComponent = () => <div>Hello</div>;
    const wrapper = helpers.mount(<FakeComponent />);

    expect(wrapper.find(Provider)).toHaveLength(1);
  });
});

describe("removeObjectFromArray", () => {
  it("returns array without passed in object", () => {
    const obj = { foo: "bar" };
    const obj2 = { bah: "baz" };
    const array = [obj, obj2];
    const expectedArray = [obj];

    expect(helpers.removeObjectFromArray(array, obj2)).toEqual(expectedArray);
  });
});

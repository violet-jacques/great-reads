import React from "react";
import configureStore from "redux-mock-store";
import { MemoryRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { mount } from "enzyme";

const mountWithStore = (component, state = {}) => {
  const mockStore = configureStore();
  const store = mockStore(state);

  return mount(
    <Provider store={store}>
      {component}
    </Provider>,
  );
};

const mountWithRouter = (component, state = {}) => {
  const wrappedComponent = (
    <Router>
      {component}
    </Router>
  );

  return mountWithStore(wrappedComponent, state);
};

export default {
  mount: mountWithStore,
  mountWithRouter,
};

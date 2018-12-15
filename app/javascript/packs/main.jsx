import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Router from "../router";
import store from "../store";

const ENTRY_POINT = Object.freeze("entry-point");

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.getElementById(ENTRY_POINT)
  );
});

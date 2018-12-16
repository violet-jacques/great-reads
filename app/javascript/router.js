import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import App from "./components/app/index";
import Layout from "./components/layout";

import routes from "./routes";

export default () => (
  <BrowserRouter>
    <App>
      <Layout>
        <Switch>
          {routes}
        </Switch>
      </Layout>
    </App>
  </BrowserRouter>
);

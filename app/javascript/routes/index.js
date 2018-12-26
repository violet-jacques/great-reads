import React from "react";
import { Route } from "react-router-dom";

import routes from "./routeConfig";

export default routes.map(route => (
  <Route
    key={route.get("path")}
    exact={route.get("exact")}
    component={route.get("component")}
    path={route.get("path")}
  />
));

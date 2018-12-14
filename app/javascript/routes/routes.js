import React from 'react';
import { Route } from 'react-router-dom';

import routeConfig from './routeConfig/routeConfig';

export default routeConfig.map(({
  component,
  exact,
  path,
}) => (
  <Route
    key={path}
    exact={exact}
    component={component}
    path={path}
  />
));

import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import App from './components/AppComponent';
import Layout from './components/layout/LayoutComponent';

import routes from './routes';

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

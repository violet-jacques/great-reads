import React, { Fragment } from 'react';

import Header from '../../header/HeaderComponent';
import Footer from '../FooterComponent';

export default ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
);

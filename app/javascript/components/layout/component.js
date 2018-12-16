import React, { Fragment } from "react";
import Header from "../header";
import Modal from "../modal";
import Footer from "./footer";

export default ({ children, modalOpen }) => (
  <Fragment>
    <Header />
    {children}
    {modalOpen && <Modal />}
    <Footer />
  </Fragment>
);

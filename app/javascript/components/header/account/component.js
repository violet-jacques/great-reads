import React from "react";
import { Link } from "react-router-dom";

export default ({
  activeDetermination,
  isLoggedIn,
  setActiveNavItem,
  signIn,
}) => {
  const renderAccountTab = () => {
    if (isLoggedIn) {
      return <Link to="/account">Account</Link>;
    } else {
      return <a>Account</a>;
    }
  };

  const accountOnClick = () => {
    if (isLoggedIn) {
      return setActiveNavItem("account");
    } else {
      return signIn;
    }
  };

  return (
    <li
      className={activeDetermination("account")}
      onClick={accountOnClick()}
    >
      {renderAccountTab()}
    </li>
  );
};

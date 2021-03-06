import React from "react";
import { Link } from "react-router-dom";

export default ({
  className,
  isLoggedIn,
  signIn,
}) => {
  const renderAccountTab = () => {
    if (isLoggedIn) {
      return <Link className="header--nav-item-link" to="/account">Account</Link>;
    } else {
      return <a>Account</a>;
    }
  };

  const accountOnClick = () => {
    if (!isLoggedIn) {
      return signIn();
    }
  };

  return (
    <li
      className={className}
      onClick={accountOnClick}
    >
      {renderAccountTab()}
    </li>
  );
};

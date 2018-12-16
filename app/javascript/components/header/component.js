import React from "react";
import { Link } from "react-router-dom";

import Account from "./account";
import Browse from "./browse";
import Community from "./community";

export default ({ activeNavItem, isLoggedIn, setActiveNavItem }) => {
  const activeDetermination = navItem => {
    if (navItem === activeNavItem) {
      return "header--nav-item-active";
    } else {
      return "header--nav-item";
    }
  };

  return (
    <ul className="header">
      <li className="header--logo">
        <div>Great Reads</div>
      </li>
      <li
        className={activeDetermination("home")}
        onClick={setActiveNavItem("home")}
      >
        <Link to="/">Home</Link>
      </li>
      <li
        className={activeDetermination("my-books")}
        onClick={setActiveNavItem("my-books")}
      >
        <Link to="/my-books">My Books</Link>
      </li>
      <Browse
        activeDetermination={activeDetermination}
      />
      <Community
        activeDetermination={activeDetermination}
      />
      <li
        className={activeDetermination("search")}
        onClick={setActiveNavItem("search")}
      >
        <Link to="/search">Search</Link>
      </li>
      <li
        className={activeDetermination("notifications")}
        onClick={setActiveNavItem("notifications")}
      >
        <div>Notifications</div>
      </li>
      <Account
        activeDetermination={activeDetermination}
      />
    </ul>
  );
};

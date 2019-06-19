import React from "react";
import { Link } from "react-router-dom";

import Account from "./account";
import Browse from "./browse";
import Community from "./community";
import Search from "./search";

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
        <Link className="header--nav-item-link" to="/">Home</Link>
      </li>
      <li
        className={activeDetermination("my-books")}
        onClick={setActiveNavItem("my-books")}
      >
        <Link className="header--nav-item-link" to="/my-books">My Books</Link>
      </li>
      <Browse
        activeDetermination={activeDetermination}
      />
      <Community
        activeDetermination={activeDetermination}
      />
      <Search
        activeDetermination={activeDetermination}
        onClick={setActiveNavItem}
      />
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

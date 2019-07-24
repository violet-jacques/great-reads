import React from "react";
import { Link } from "react-router-dom";

import Account from "./account";
import Browse from "./browse";
import Community from "./community";
import Search from "./search";

export default ({ activeNavItem, setActiveNavItem }) => {
  return (
    <ul className="header">
      <li className="header--logo">
        <div>Great Reads</div>
      </li>
      <li
        className="header--nav-item"
        onClick={setActiveNavItem("home", "/")}
      >
        <a className="header--nav-item-link">Home</a>
      </li>
      <li
        className="header--nav-item"
        onClick={setActiveNavItem("my-books", "/my-books")}
      >
        <Link className="header--nav-item-link" to="/my-books">My Books</Link>
      </li>
      <Browse
        className="header--nav-item"
      />
      <Community
        className="header--nav-item"
      />
      <Search
        className="header--nav-item"
        onClick={setActiveNavItem}
      />
      <li
        className="header--nav-item"
        onClick={setActiveNavItem("notifications")}
      >
        <div>Notifications</div>
      </li>
      <Account
        className="header--nav-item"
        onClick={setActiveNavItem("account", "/account")}
      />
    </ul>
  );
};

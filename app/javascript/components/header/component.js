import React from "react";
import { Link } from "react-router-dom";

import Account from "./account";
import Browse from "./browse";
import Community from "./community";
import Search from "./search";

export default ({ history: history }) => (
  <ul className="header">
    <Link
      className="header--nav-item-no-highlight"
      to="/"
    >
      <div>Great Reads</div>
    </Link>
    <Link className="header--nav-item" to="/"
>
      <div className="header--nav-item-link">Home</div>
    </Link>
    <Link
      className="header--nav-item"
      to="my-books"
    >
      <div className="header--nav-item-link">My Books</div>
    </Link>
    <Browse
      className="header--nav-item"
    />
    <Community
      className="header--nav-item"
    />
    <Search
      className="header--nav-item"
    />
    <li
      className="header--nav-item"
    >
      <div>Notifications</div>
    </li>
    <Account
      className="header--nav-item"
    />
  </ul>
);

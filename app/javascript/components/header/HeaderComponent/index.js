import React from "react";
import { Link } from "react-router-dom";

import Browse from '../BrowseComponent';
import Community from '../CommunityComponent';

export default ({ isLoggedIn }) => {
  const path = isLoggedIn ? "/account" : "/sign-in";

  return (
    <ul className="header">
      <li className="header--logo">
        <div>Great Reads</div>
      </li>
      <li className="header--nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="header--nav-item">
        <Link to="/my-books">My Books</Link>
      </li>
      <li className="header--nav-item">
        <Browse />
      </li>
      <li className="header--nav-item">
        <Community />
      </li>
      <li className="header--nav-item">
        <div>Search</div>
      </li>
      <li className="header--nav-item">
        <div>Notifications</div>
      </li>
      <li className="header--nav-item">
        <Link to={path}>Account</Link>
      </li>
    </ul>
  );
};

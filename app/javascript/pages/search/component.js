import React from "react";

import AddBook from "../../components/search/addBook";
import Books from "../../components/search/books";
import RelatedShelves from "../../components/search/relatedShelves";
import SearchBar from "../../components/search/searchBar";


export default () => (
  <ul className="searchPage--container">
    <li className="searchPage--component">Search</li>
    <ul className="searchPage--column">
    </ul>
    <ul className="searchPage--column">
      <li className="searchPage--component">
        <SearchBar />
      </li>
      <li className="searchPage--component">
        <Books />
      </li>
    </ul>
    <ul className="searchPage--column">
    <li className="searchPage--component">
        <AddBook />
      </li>
      <li className="searchPage--component">
        <RelatedShelves />
      </li>
    </ul>
  </ul>
);

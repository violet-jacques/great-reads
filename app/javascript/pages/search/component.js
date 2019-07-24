import React from "react";

import AddBook from "../../components/search/addBook";
import Books from "../../components/search/books";
import RelatedShelves from "../../components/search/relatedShelves";
import SearchBar from "../../components/search/searchBar";


export default ({ books }) => {
  const thereAreBooks = () => {
    return books.count() > 0;
  };

  const renderBooks = () => {
    if (thereAreBooks()) {
      return(
        <li className="searchPage--component">
          <Books />
        </li>
      );
    }
  };

  const renderRelatedShelves = () => {
    if (thereAreBooks()) {
      return(
        <li className="searchPage--component">
          <RelatedShelves />
        </li>
      );
    }
  };

  return(
    <ul className="searchPage--container">
      <li className="searchPage--component">Search</li>
    <ul className="searchPage--column">
      <li className="searchPage--component">
        <SearchBar />
      </li>
      {renderBooks()}
    </ul>
    <ul className="searchPage--column">
      <li className="searchPage--component">
        <AddBook />
      </li>
      {renderRelatedShelves()}
    </ul>
  </ul>
  );
};

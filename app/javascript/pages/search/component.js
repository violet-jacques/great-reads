import React from "react";

import AddBook from "../../components/search/addBook";
import Books from "../../components/search/books";
import RelatedShelves from "../../components/search/relatedShelves";
import SearchBar from "../../components/search/searchBar";


export default ({ books }) => {
  const renderSearchPageComponent = Component => {
    if (books.count() > 0) {
      return(
        <li className="searchPage--component">
          <Component />
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
      {renderSearchPageComponent(Books)}
    </ul>
    <ul className="searchPage--column">
      <li className="searchPage--component">
        <AddBook />
      </li>
      {renderSearchPageComponent(RelatedShelves)}
    </ul>
  </ul>
  );
};

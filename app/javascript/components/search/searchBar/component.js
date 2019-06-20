import React from "react";
import SearchForm from "../../../forms/searchBar";

export default ({
  onSubmit,
  query,
  scope,
}) => {
  return (
    <SearchForm
      onSubmit={onSubmit}
      initialValues={{ query, scope }}
    />
  );
};

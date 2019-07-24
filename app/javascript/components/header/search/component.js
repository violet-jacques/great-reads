import React from "react";
import SearchForm from "../../../forms/headerSearch";

export default ({
  className,
  onSubmit,
}) => {

  return (
    <li className={className}>
      <div className="search--link">
        <SearchForm
          onSubmit={onSubmit}
          formClassName={"search--form"}
        />
      </div>
    </li>
  );
};

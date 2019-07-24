import React from "react";
import SearchForm from "../../../forms/headerSearch";

export default ({
  className,
  onClick,
  onSubmit,
}) => {

  return (
    <li className={className} onClick={onClick("search")}>
      <div className="search--link">
        <SearchForm
          onSubmit={onSubmit}
          formClassName={"search--form"}
        />
      </div>
    </li>
  );
};

import React from "react";
import SearchForm from "../../../forms/headerSearch";

export default ({
  activeDetermination,
  onClick,
  onSubmit,
}) => {

  return (
    <li className={activeDetermination("search")} onClick={onClick("search")}>
      <div className="search--link">
        <SearchForm
          onSubmit={onSubmit}
          formClassName={"search--form"}
        />
      </div>
    </li>
  );
};

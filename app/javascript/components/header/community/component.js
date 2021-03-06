import React from "react";
import OutsideClickHandler from "react-outside-click-handler";

export default ({
  className,
  dropdownOpen,
  hideDropdown,
  showDropdown,
}) => {
  const renderDropdown = () => {
    if (dropdownOpen) {
      return (
        <div className="header--dropdown">
          <a>hey</a>
          <a>there</a>
        </div>
      );
    }
  };

  const handleClick = () => {
    if (dropdownOpen) {
      return hideDropdown();
    }

    showDropdown();
  };

  return (
    <OutsideClickHandler onOutsideClick={hideDropdown}>
      <li className={className} onClick={handleClick}>
        <div className="header--with-dropdown">
          <div className="header--dropdown-title">
            Community
            <div className="header--drop-down-triangle">&#9660;</div>
          </div>
          {renderDropdown()}
        </div>
      </li>
    </OutsideClickHandler>
  );
};

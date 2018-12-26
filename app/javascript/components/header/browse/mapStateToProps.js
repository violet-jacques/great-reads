export default state => {
  return {
    activeNavItem: state.getIn(["header", "activeNavItem"]),
    dropdownOpen: state.getIn(["header", "dropdowns", "browse"]),
  };
};

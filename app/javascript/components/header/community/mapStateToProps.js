export default state => {
  return {
    dropdownOpen: state.getIn(["header", "dropdowns", "community"]),
  };
};

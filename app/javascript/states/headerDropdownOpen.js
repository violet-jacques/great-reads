export default path => state => {
  return {
    dropdownOpen: state.getIn(["header", "dropdowns", path]),
  };
};

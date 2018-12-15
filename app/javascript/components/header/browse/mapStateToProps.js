export default ({
  header: {
    activeNavItem,
    dropdowns: { browse },
  },

}) => {
  return {
    activeNavItem,
    dropdownOpen: browse,
  };
};

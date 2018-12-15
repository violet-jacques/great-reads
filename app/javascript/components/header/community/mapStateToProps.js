export default ({
  header: {
    activeNavItem,
    dropdowns: { community },
  },

}) => {
  return {
    activeNavItem,
    dropdownOpen: community,
  };
};

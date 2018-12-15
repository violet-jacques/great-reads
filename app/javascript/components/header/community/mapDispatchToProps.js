import headerActions from "../../../actions/headerActions";

export default dispatch => {
  const { setActiveNavItem, toggleHeaderDropdown } = headerActions;

  return {
    showDropdown: () => dispatch(toggleHeaderDropdown("community", true)),
    hideDropdown: () => {
      dispatch(toggleHeaderDropdown("community", false));
      dispatch(setActiveNavItem(""));
    },
    setActiveNavItem: () => dispatch(setActiveNavItem("community")),
  };
};

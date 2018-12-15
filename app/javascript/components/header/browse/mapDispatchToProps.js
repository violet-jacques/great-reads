import headerActions from "../../../actions/headerActions";

export default dispatch => {
  const { setActiveNavItem, toggleHeaderDropdown } = headerActions;

  return {
    showDropdown: () => dispatch(toggleHeaderDropdown("browse", true)),
    hideDropdown: () => {
      dispatch(toggleHeaderDropdown("browse", false));
      dispatch(setActiveNavItem(""));
    },
    setActiveNavItem: () => dispatch(setActiveNavItem("browse")),
  };
};

import headerActions from "../../../actions/headerActions";

export default dispatch => {
  const { toggleHeaderDropdown } = headerActions;

  return {
    showDropdown: () => dispatch(toggleHeaderDropdown("community", true)),
    hideDropdown: () => {
      dispatch(toggleHeaderDropdown("community", false));
    },
  };
};

import headerActions from "../../actions/headerActions";

export default dispatch => {
  const { setActiveNavItem } = headerActions;

  return {
    setActiveNavItem: navItem => () => dispatch(setActiveNavItem(navItem)),
  };
};

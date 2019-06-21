import headerActions from "../../actions/headerActions";

export default (dispatch, ownProps) => {
  const { setActiveNavItem } = headerActions;

  return {
    setActiveNavItem: (navItem, path) => () => {
      if (path) {
        ownProps.history.push(path);
      }

      return dispatch(setActiveNavItem(navItem));
    },
  };
};

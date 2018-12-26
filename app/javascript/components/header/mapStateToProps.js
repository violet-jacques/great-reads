export default state => {
  return {
    activeNavItem: state.getIn(["header", "activeNavItem"]),
    isLoggedIn: state.getIn(["user", "isLoggedIn"]),
  };
};

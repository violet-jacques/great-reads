export default state => {
  return {
    activeNavItem: state.getIn(["header", "activeNavItem"]),
  };
};

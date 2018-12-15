export default ({
  header: { activeNavItem },
  user: { isLoggedIn },
}) => {
  return {
    activeNavItem,
    isLoggedIn,
  };
};

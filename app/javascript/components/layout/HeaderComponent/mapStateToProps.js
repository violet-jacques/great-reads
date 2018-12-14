export default ({ user }) => {
  const { isLoggedIn } = user;

  return {
    isLoggedIn,
  };
};

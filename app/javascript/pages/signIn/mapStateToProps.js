export default state => {
  const { user: { loginErrorMessage } } = state;

  return {
    loginErrorMessage,
  };
};

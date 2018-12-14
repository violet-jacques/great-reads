export default state => {
  const { user: { signUpErrorMessage } } = state;

  return {
    signUpErrorMessage,
  };
};

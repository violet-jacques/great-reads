export default state => {
  return {
    signUpErrorMessage: state.getIn(["user", "errors", "signUpErrorMessage"]),
  };
};

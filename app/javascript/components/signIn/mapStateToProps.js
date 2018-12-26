export default state => {
  return {
    loginErrorMessage: state.getIn(["user", "errors", "loginErrorMessage"]),
  };
};

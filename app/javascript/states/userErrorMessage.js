export default path => state => {
  return {
    [path]: state.getIn(["user", "errors", path]),
  };
};

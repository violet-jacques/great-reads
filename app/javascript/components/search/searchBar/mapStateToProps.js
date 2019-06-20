export default state => ({
  query: state.getIn(["search", "query"]),
  scope: state.getIn(["search", "scope"]),
});

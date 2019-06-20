import searchActions from "../../../actions/searchActions";

export default dispatch => {
  const { search } = searchActions;

  return {
    onSubmit: query => dispatch(search(query.toJS())),
  };
};

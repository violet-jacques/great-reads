import searchActions from "../../../actions/searchActions";

export default (dispatch, ownProps) => {
  const { search } = searchActions;

  return {
    onSubmit: query => {
      ownProps.history.push("/search");
      return dispatch(search(query.toJS()));
    },
  };
};

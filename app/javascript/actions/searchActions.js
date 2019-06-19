import searchApi from "../api/searchApi";
import genericAction from "./genericAction";
import { SEARCH_SUCCESS } from "../actionTypes";

const handleResponse = response => {
  return genericAction(
    SEARCH_SUCCESS,
    response.get("books"),
  );
};

export default {
  search: query => (
    dispatch => (
      searchApi.search(query)
        .then(response => {
          dispatch(handleResponse(response));
        })
    )
  ),
};

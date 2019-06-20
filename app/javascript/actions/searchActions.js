import { Map } from "immutable";

import searchApi from "../api/searchApi";
import genericAction from "./genericAction";
import { SEARCH_SUCCESS } from "../actionTypes";

const handleResponse = (form, response) => {
  return genericAction(
    SEARCH_SUCCESS,
    Map({
      books: response.get("books"),
      query: form.query,
      scope: form.scope,
    }),
  );
};

export default {
  search: form => (
    dispatch => (
      searchApi.search(form)
        .then(response => {
          dispatch(handleResponse(form, response));
        })
    )
  ),
};

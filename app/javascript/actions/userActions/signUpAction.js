import { fromJS } from "immutable";

import userApi from "../../api/userApi";
import genericAction from "../genericAction";
import modalActions from "../modalActions";
import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../../actionTypes";

const handleResponse = response => {
  if (response.get("success")) {
    return genericAction(
      SIGN_UP_SUCCESS,
      response.get("user"),
    );
  } else {
    return genericAction(
      SIGN_UP_FAILURE,
      response.get("error"),
    );
  }
};

export default form => (
  dispatch => (
    userApi.signUp(form)
      .then(response => {
        const { hideModal } = modalActions;

        if (response.get("success")) {
          dispatch(hideModal());
        }

        dispatch(handleResponse(response));
      })
  )
);

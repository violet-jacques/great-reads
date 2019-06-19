import userApi from "../../api/userApi";
import genericAction from "../genericAction";
import modalActions from "../modalActions";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../../actionTypes";

const handleResponse = response => {
  if (response.get("success")) {
    return genericAction(
      LOGIN_SUCCESS,
      response.get("user"),
    );
  } else {
    return genericAction(
      LOGIN_FAILURE,
      response.get("error"),
    );
  }
};

export default form => (
  dispatch => (
    userApi.signIn(form)
      .then(response => {
        const { hideModal } = modalActions;

        if (response.get("success")) {
          dispatch(hideModal());
        }

        dispatch(handleResponse(response));
      })
  )
);

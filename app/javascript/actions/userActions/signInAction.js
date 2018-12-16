import userApi from "../../api/userApi";
import genericAction from "../genericAction";
import modalActions from "../modalActions";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../../actionTypes";

const handleResponse = ({ success, user, error }) => {
  if (success) {
    return genericAction(
      LOGIN_SUCCESS,
      user,
    );
  } else {
    return genericAction(
      LOGIN_FAILURE,
      error,
    );
  }
};

export default form => (
  dispatch => (
    userApi.signIn(form)
      .then(response => {
        const { hideModal } = modalActions;
        const { success } = response;

        if (success) {
          dispatch(hideModal());
        }

        dispatch(handleResponse(response));
      })
  )
);

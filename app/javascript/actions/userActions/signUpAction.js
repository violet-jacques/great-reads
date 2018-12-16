import userApi from "../../api/userApi";
import genericAction from "../genericAction";
import modalActions from "../modalActions";
import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../../actionTypes";

const handleResponse = ({ success, user, error }) => {
  if (success) {
    return genericAction(
      SIGN_UP_SUCCESS,
      user,
    );
  } else {
    return genericAction(
      SIGN_UP_FAILURE,
      error,
    );
  }
};

export default form => (
  dispatch => (
    userApi.signUp(form)
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

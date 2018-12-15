import userApi from "../../api/userApi";
import genericAction from "../genericAction";
import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../../actionTypes";

const handleSuccessSignIn = (dispatch, history, user) => {
  dispatch(
    genericAction(
      LOGIN_SUCCESS,
      user,
    ),
  );
  history.goBack();
};

const handleFailureSignIn = (dispatch, error) => {
  dispatch(
    genericAction(
      LOGIN_FAILURE,
      error,
    ),
  );
};

const handleSignInResponse = (dispatch, history, response) => {
  const { success, user, error } = response;

  if (success) {
    handleSuccessSignIn(dispatch, history, user);
  } else {
    handleFailureSignIn(dispatch, error);
  }
};

export default (history, form) => (
  dispatch => (
    userApi.signIn(form)
      .then(response => {
        handleSignInResponse(dispatch, history, response);
      })
  )
);

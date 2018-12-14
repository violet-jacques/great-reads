import userApi from '../../api/userApi';
import genericAction from '../genericAction';
import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../../actionTypes';

const handleSuccessSignUp = (dispatch, history, user) => {
  dispatch(
    genericAction(
      SIGN_UP_SUCCESS,
      user,
    ),
  );
  history.push('/');
};

const handleFailureSignUp = (dispatch, error) => {
  dispatch(
    genericAction(
      SIGN_UP_FAILURE,
      error,
    ),
  );
};

const handleSignUpResponse = (dispatch, history, response) => {
  const { success, user, error } = response;

  if (success) {
    handleSuccessSignUp(dispatch, history, user);
  } else {
    handleFailureSignUp(dispatch, error);
  }
};

export default (history, form) => (
  dispatch => (
    userApi.signUp(form)
      .then(response => {
        handleSignUpResponse(dispatch, history, response);
      })
  )
);

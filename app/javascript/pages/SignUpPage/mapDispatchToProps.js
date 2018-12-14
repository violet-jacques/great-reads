import userActions from '../../actions/userActions';

export default dispatch => {
  const { signUpAction } = userActions;
  const signUp = (history, form) => (
    dispatch(signUpAction(history, form))
  );

  return {
    onSubmit: history => form => signUp(history, form),
  };
};

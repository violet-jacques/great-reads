import userActions from '../../actions/userActions';

export default dispatch => {
  const { signInAction } = userActions;
  const signIn = (history, form) => (
    dispatch(signInAction(history, form))
  );

  return {
    onSubmit: history => form => signIn(history, form),
  };
};

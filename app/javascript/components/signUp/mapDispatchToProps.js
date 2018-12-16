import userActions from "../../actions/userActions";

export default dispatch => {
  const { signUpAction } = userActions;

  return {
    onSubmit: form => dispatch(signUpAction(form)),
  };
};

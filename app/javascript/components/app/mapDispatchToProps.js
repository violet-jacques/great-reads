import userActions from "../../actions/userActions";

export default dispatch => {
  const { signInAction } = userActions;

  return {
    signIn: id => dispatch(signInAction(id))
  };
};

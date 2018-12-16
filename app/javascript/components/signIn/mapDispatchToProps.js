import userActions from "../../actions/userActions";
import modalActions from "../../actions/modalActions";

export default dispatch => {
  const { signInAction } = userActions;
  const { setModalType } = modalActions;

  return {
    onSubmit: form => dispatch(signInAction(form)),
    register: () => dispatch(setModalType("signUp")),
  };
};

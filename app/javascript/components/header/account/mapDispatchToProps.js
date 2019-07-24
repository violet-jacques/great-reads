import headerActions from "../../../actions/headerActions";
import modalActions from "../../../actions/modalActions";

export default dispatch => {
  const { showModal, setModalType } = modalActions;

  return {
    signIn: () => {
      dispatch(setModalType("signIn"));
      dispatch(showModal());
    }
  };
};

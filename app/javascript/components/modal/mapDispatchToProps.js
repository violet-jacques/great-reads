import modalActions from "../../actions/modalActions";

export default dispatch => {
  const { hideModal } = modalActions;

  return {
    hideModal: () => {
      dispatch(hideModal());
    }
  };
};

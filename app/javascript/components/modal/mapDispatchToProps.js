import modalActions from "../../actions/modalActions";

export default dispatch => {
  const { toggleModal } = modalActions;

  return {
    toggleModal: () => {
      dispatch(toggleModal());
    }
  };
};

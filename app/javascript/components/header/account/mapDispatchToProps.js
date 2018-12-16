import headerActions from "../../../actions/headerActions";
import modalActions from "../../../actions/modalActions";

export default dispatch => {
  const { setActiveNavItem } = headerActions;
  const { toggleModal, setModalType } = modalActions;

  return {
    setActiveNavItem: navItem => () => dispatch(setActiveNavItem(navItem)),
    signIn: () => {
      dispatch(setModalType("signIn"));
      dispatch(toggleModal());
    }
  };
};

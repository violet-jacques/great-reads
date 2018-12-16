import genericAction from "./genericAction";
import { TOGGLE_MODAL, SET_MODAL_TYPE } from "../actionTypes";

export default {
  toggleModal: () => {
    return genericAction(
      TOGGLE_MODAL,
    );
  },

  setModalType: type => {
    return genericAction(
      SET_MODAL_TYPE,
      type,
    );
  },
};

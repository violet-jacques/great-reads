import genericAction from "./genericAction";
import { SHOW_MODAL, HIDE_MODAL, SET_MODAL_TYPE } from "../actionTypes";

export default {
  hideModal: () => {
    return genericAction(
      HIDE_MODAL,
    );
  },

  showModal: () => {
    return genericAction(
      SHOW_MODAL,
    );
  },

  setModalType: type => {
    return genericAction(
      SET_MODAL_TYPE,
      type,
    );
  },
};

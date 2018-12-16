import { SHOW_MODAL, HIDE_MODAL, SET_MODAL_TYPE } from "../actionTypes";


const initialState = {
  open: false,
  type: "",
};

export default (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case HIDE_MODAL:
      return {
        ...state,
        open: false,
      };
    case SHOW_MODAL:
      return {
        ...state,
        open: true,
      };
    case SET_MODAL_TYPE:
      return {
        ...state,
        type: payload,
      };
    default:
      return state;
  }
};

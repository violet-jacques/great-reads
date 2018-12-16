import { TOGGLE_MODAL, SET_MODAL_TYPE } from "../actionTypes";


const initialState = {
  open: false,
  type: "",
};

export default (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        open: !state.open,
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

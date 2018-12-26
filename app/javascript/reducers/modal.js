import { Map } from "immutable";

import { SHOW_MODAL, HIDE_MODAL, SET_MODAL_TYPE } from "../actionTypes";


const initialState = Map({
  open: false,
  type: "",
});

export default (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case HIDE_MODAL:
    return state.set("open", false);
    case SHOW_MODAL:
      return state.set("open", true);
    case SET_MODAL_TYPE:
      return state.set("type", payload);
    default:
      return state;
  }
};

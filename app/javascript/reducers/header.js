import { SET_ACTIVE_NAV_ITEM, TOGGLE_HEADER_DROPDOWN } from "../actionTypes";


const initialState = {
  activeNavItem: "",
  dropdowns: {
    browse: false,
    community: false,
  },
};

export default (
  state = initialState,
  { type, payload },
) => {
  switch (type) {
    case SET_ACTIVE_NAV_ITEM:
      return {
        ...state,
        activeNavItem: payload
      };
    case TOGGLE_HEADER_DROPDOWN:
      return {
        ...state,
        dropdowns: {
          ...state.dropdowns,
          [payload.navItem]: payload.value,
        }
      };
    default:
      return state;
    }
};

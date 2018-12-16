import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import mapDispatchToProps from "../../../components/modal/mapDispatchToProps";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

describe("mapDispatchToProps", () => {
  const props = mapDispatchToProps(store.dispatch);

  describe("setActiveNavItem", () => {
    const { toggleModal } = props;

    it("returns the expected action", () => {
      const expectedAction = {
        type: "TOGGLE_MODAL",
      };
      toggleModal();

      expect(store.getActions()).toContainEqual(expectedAction);
    });
  });
});

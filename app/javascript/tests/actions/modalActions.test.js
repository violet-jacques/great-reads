import modalActions from "../../actions/modalActions";
import { SHOW_MODAL, HIDE_MODAL, SET_MODAL_TYPE } from "../../actionTypes";

describe("modalActions", () => {
  const { hideModal, showModal, setModalType } = modalActions;

  describe("hideModal", () => {
    it("returns an object with a type and payload key value pair", () => {
      expect(hideModal()).toEqual({
        type: HIDE_MODAL,
      });
    });
  });

  describe("hideModal", () => {
    it("returns an object with a type and payload key value pair", () => {
      expect(showModal()).toEqual({
        type: SHOW_MODAL,
        payload: undefined,
      });
    });
  });

  describe("setModalType", () => {
    const modalType = "Sup";

    it("returns an object with a type and payload key value pair", () => {
      expect(setModalType(modalType)).toEqual({
        type: SET_MODAL_TYPE,
        payload: modalType,
      });
    });
  });
});

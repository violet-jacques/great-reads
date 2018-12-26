import { Map } from "immutable";
import React from "react";
import testHelpers from "../../helpers";
import Modal from "../../../components/modal";
import SignIn from "../../../components/signIn";
import SignUp from "../../../components/signUp";

describe("Modal", () => {
  let wrapper;
  const state = Map({
    modal: Map({
      open: true,
      type: "",
    }),
    user: Map(),
  });

  beforeEach(() => {
    wrapper = testHelpers.mountWithRouter(<Modal />, state);
  });

  it("renders", () => {
    expect(wrapper.find(Modal)).toHaveLength(1);
  });

  describe("clicking on modal", () => {
    const event = {
      target: {
        classList: {
          value: "modal",
        }
      }
    };

    describe("clicking outside the modal", () => {
      it("closes the modal", () => {
        wrapper.find(".modal").prop("onClick")(event);
        const expectedAction = {
          type: "HIDE_MODAL",
        };
        expect(wrapper.props().store.getActions()).toContainEqual(expectedAction);
      });
    });

    describe("clicking on the close", () => {
      it("closes the modal", () => {
        wrapper.find(".close").prop("onClick")();
        const expectedAction = {
          type: "HIDE_MODAL",
        };
        expect(wrapper.props().store.getActions()).toContainEqual(expectedAction);
      });
    });

    describe("when not a modal event", () => {
      const newEvent = {
        target: {
          classList: {
            value: "modal-content",
          }
        }
      };

      it("does not close the modal", () => {
        wrapper.find(".modal").prop("onClick")(newEvent);
        const expectedAction = {
          type: "HIDE_MODAL",
        };
        expect(wrapper.props().store.getActions()).not.toContainEqual(expectedAction);
      });
    });
  });

  describe("modal content", () => {
    it("does not render content by default", () => {
      expect(wrapper.find(SignIn)).toHaveLength(0);
      expect(wrapper.find(SignUp)).toHaveLength(0);

    });

    describe("when modal type is signIn", () => {
      const newState = state.setIn(["modal", "type"], "signIn");

      beforeEach(() => {
        wrapper = testHelpers.mountWithRouter(<Modal />, newState);
      });

      it("renders SignIn component", () => {
        expect(wrapper.find(SignIn)).toHaveLength(1);
      });
    });

    describe("when modal type is signUp", () => {
      const newState = state.setIn(["modal", "type"], "signUp");


      beforeEach(() => {
        wrapper = testHelpers.mountWithRouter(<Modal />, newState);
      });

      it("renders SignUp component", () => {
        expect(wrapper.find(SignUp)).toHaveLength(1);
      });
    });
  });
});

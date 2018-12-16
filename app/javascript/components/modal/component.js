import React from "react";
import SignIn from "../../components/signIn";
import SignUp from "../../components/signUp";

export default ({ hideModal, type }) => {
  const modalContent = () => {
    switch(type) {
      case "signUp":
        return <SignUp />;
      case "signIn":
        return <SignIn />;
      default:
        return null;
    }
  };

  const closeModal = e => {
    if (e.target.classList.value === "modal") {
      hideModal();
    }
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content">
        <span className="close" onClick={hideModal}>&times;</span>
        {modalContent()}
      </div>
    </div>
  );
};

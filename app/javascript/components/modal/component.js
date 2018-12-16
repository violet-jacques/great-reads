import React from "react";
import SignIn from "../../components/signIn";
import SignUp from "../../components/signUp";

export default ({ toggleModal, type }) => {
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
      toggleModal();
    }
  };

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content">
        <span className="close" onClick={toggleModal}>&times;</span>
        {modalContent()}
      </div>
    </div>
  );
};

import React, { Fragment } from "react";

import SignUpForm from "../../forms/signUp";

export default ({
  signUpErrorMessage,
  onSubmit,
}) => {
  const renderErrorMessage = () => {
    if (signUpErrorMessage) {
      return (
        <div className="sign-up-error-message">{signUpErrorMessage}</div>
      );
    }

    return null;
  };

  return (
    <Fragment>
      <div>Sign Up?</div>
      {renderErrorMessage()}
      <SignUpForm
        onSubmit={onSubmit}
      />
    </Fragment>
  );
};

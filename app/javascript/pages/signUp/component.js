import React, { Fragment } from "react";

import SignUpForm from "../../forms/signUp";

export default ({
  history,
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
        onSubmit={onSubmit(history)}
      />
    </Fragment>
  );
};

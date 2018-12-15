import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import SignInForm from "../../forms/SignInForm";

export default ({
  history,
  loginErrorMessage,
  onSubmit,
}) => {
  const renderErrorMessage = () => {
    if (loginErrorMessage) {
      return (
        <div className="login-error-message">{loginErrorMessage}</div>
      );
    }

    return null;
  };

  const renderSignUp = () => (
    <div>
      <p>Don&apos;t have an account?</p>
      <Link to="/sign-up">Register for one!</Link>
    </div>
  );

  return (
    <Fragment>
      <div>Sign In?</div>
      {renderErrorMessage()}
      <SignInForm
        onSubmit={onSubmit(history)}
      />
      {renderSignUp()}
    </Fragment>
  );
};

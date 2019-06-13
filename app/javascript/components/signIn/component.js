import React, { Fragment } from "react";

import SignInForm from "../../forms/signIn";

export default ({
  loginErrorMessage,
  onSubmit,
  register,
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
      <a onClick={register}>Register for one!</a>
    </div>
  );

  return (
    <Fragment>
      <div>Sign In?</div>
      {renderErrorMessage()}
      <SignInForm
        onSubmit={onSubmit}
      />
      {renderSignUp()}
    </Fragment>
  );
};

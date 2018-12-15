import React from "react";
import { Field } from "redux-form";

import SignInForm from "../signIn/form";

export default ({ handleSubmit }) => (
  <SignInForm handleSubmit={handleSubmit}>
    <div>
      <label htmlFor="password_confirmation">Password Confirmation</label>
      <Field name="password_confirmation" component="input" type="password" />
    </div>
  </SignInForm>
);

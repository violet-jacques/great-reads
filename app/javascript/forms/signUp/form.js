import React from "react";
import { Field } from "redux-form/immutable";

export default ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="first_name">First Name</label>
      <Field name="first_name" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="last_name">Last Name</label>
      <Field name="last_name" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component="input" type="email" />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Field name="password" component="input" type="password" />
    </div>
    <div>
      <label htmlFor="password_confirmation">Password Confirmation</label>
      <Field name="password_confirmation" component="input" type="password" />
    </div>
    <button type="submit">Submit</button>
  </form>
);

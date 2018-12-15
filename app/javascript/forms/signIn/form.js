import React from "react";
import { Field } from "redux-form";

export default ({ children, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component="input" type="email" />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Field name="password" component="input" type="password" />
    </div>
    {children}
    <button type="submit">Submit</button>
  </form>
);

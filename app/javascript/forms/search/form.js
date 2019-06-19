import React from "react";
import { Field } from "redux-form/immutable";

export default ({ formClassName, handleSubmit }) => (
  <form onSubmit={handleSubmit} className={formClassName}>
    <div>
      <label htmlFor="search"></label>
      <Field name="search" component="input" type="search" />
    </div>
    <button type="submit">Search</button>
  </form>
);

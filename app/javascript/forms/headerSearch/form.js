import React from "react";
import { Field } from "redux-form/immutable";

export default ({ formClassName, handleSubmit }) => (
  <form onSubmit={handleSubmit} className={formClassName}>
    <div>
      <label htmlFor="query"></label>
      <Field name="query" component="input" type="search" />
    </div>
    <button type="submit">Search</button>
  </form>
);

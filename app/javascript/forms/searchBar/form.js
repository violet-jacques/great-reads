import React from "react";
import { Field } from "redux-form/immutable";

export default ({ handleSubmit }) => {
  return(
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="query"></label>
      <Field name="query" component="input" type="search"/>
    </div>
    <button type="submit">Search</button>
    <div>
      <label><Field name="scope" component="input" type="radio" value="all"/>All</label>
      <label><Field name="scope" component="input" type="radio" value="title"/>Title</label>
      <label><Field name="scope" component="input" type="radio" value="author"/>Author</label>
      <label><Field name="scope" component="input" type="radio" value="genre"/>Genre</label>
    </div>
  </form>
  )
}

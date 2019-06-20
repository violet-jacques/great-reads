import { reduxForm } from "redux-form/immutable";

import Form from "./form";

export default reduxForm({
  form: "searchBar",
  enableReinitialize: true,
})(Form);

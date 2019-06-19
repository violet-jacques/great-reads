import { reduxForm } from "redux-form/immutable";

import Form from "./form";

export default reduxForm({
  form: "search",
})(Form);

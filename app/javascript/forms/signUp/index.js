import { reduxForm } from "redux-form/immutable";

import Form from "./form";

export default reduxForm({
  form: "signUp",
})(Form);

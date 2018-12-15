import { reduxForm } from "redux-form";

import Form from "./form";

export default reduxForm({
  form: "signIn",
})(Form);

import { reduxForm } from 'redux-form';

import Form from './SignInForm/Form';

export default reduxForm({
  form: 'signIn',
})(Form);

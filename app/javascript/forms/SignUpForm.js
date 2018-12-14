import { reduxForm } from 'redux-form';

import Form from './SignUpForm/Form';

export default reduxForm({
  form: 'signUp',
})(Form);

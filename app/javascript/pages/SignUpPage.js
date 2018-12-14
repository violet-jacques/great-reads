import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import mapStateToProps from './SignUpPage/mapStateToProps';
import mapDispatchToProps from './SignUpPage/mapDispatchToProps';
import SignUp from './SignUpPage/SignUp';

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignUp),
);

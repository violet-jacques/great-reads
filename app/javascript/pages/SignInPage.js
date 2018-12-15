import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import mapStateToProps from "./SignInPage/mapStateToProps";
import mapDispatchToProps from "./SignInPage/mapDispatchToProps";
import SignIn from "./SignInPage/SignIn";

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignIn),
);

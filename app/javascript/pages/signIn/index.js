import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import mapStateToProps from "./mapStateToProps";
import mapDispatchToProps from "./mapDispatchToProps";
import SignIn from "./component";

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(SignIn),
);

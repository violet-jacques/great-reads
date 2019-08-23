import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import App from "./component";
import mapStateToProps from "../../states/userLoggedIn";
import mapDispatchToProps from "./mapDispatchToProps";

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

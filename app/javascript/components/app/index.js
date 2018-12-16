import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import App from "./component";
import mapStateToProps from "./mapStateToProps";
import mapDispatchToProps from "./mapDispatchToProps";

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);

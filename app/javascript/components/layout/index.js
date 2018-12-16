import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./component";
import mapStateToProps from "./mapStateToProps";

export default withRouter(
  connect(mapStateToProps)(Layout)
);

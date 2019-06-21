import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./component";
import mapDispatchToProps from "./mapDispatchToProps";
import mapStateToProps from "./mapStateToProps";


export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Header)
)

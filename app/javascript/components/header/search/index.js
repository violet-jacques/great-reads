import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import Search from "./component";
import mapDispatchToProps from "./mapDispatchToProps";

const mapStateToProps = () => { return {} };

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Search)
);

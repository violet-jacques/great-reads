import { connect } from "react-redux";

import mapStateToProps from "./mapStateToProps";
import mapDispatchToProps from "./mapDispatchToProps";
import SignIn from "./component";

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

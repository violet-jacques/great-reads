import { connect } from "react-redux";

import App from "./component";
import mapStateToProps from "./mapStateToProps";
import mapDispatchToProps from "./mapDispatchToProps";

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

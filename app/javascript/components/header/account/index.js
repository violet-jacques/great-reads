import { connect } from "react-redux";

import Account from "./component";
import mapDispatchToProps from "./mapDispatchToProps";
import mapStateToProps from "../../../states/userLoggedIn";


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Account);

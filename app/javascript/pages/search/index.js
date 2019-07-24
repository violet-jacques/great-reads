import { connect } from "react-redux";

import Search from "./component";
import mapStateToProps from "./mapStateToProps";

export default connect(mapStateToProps)(Search);

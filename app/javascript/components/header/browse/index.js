import { connect } from "react-redux";
import Browse from "./component";
import mapDispatchToProps from "./mapDispatchToProps";
import mapStateToProps from "./mapStateToProps";

export default connect(mapStateToProps, mapDispatchToProps)(Browse);

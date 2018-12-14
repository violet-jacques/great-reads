import { connect } from 'react-redux';
import Header from './HeaderComponent/index';
import mapStateToProps from './HeaderComponent/mapStateToProps';


export default connect(mapStateToProps)(Header);

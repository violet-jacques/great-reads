export default state => ({ isLoggedIn: state.getIn(["user", "isLoggedIn"]) });

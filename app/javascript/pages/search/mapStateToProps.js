export default state => ({ books: state.getIn(["search", "books"]) });

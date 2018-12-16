import React, { Component } from "react";

export default class extends Component {
  componentDidMount() {
    const { isLoggedIn, signIn } = this.props;
    const userId = document.getElementById("entry-point").dataset.id;
    if (userId && !isLoggedIn) {
      signIn(userId);
    }
  }

  render() {
    return this.props.children;
  }
}

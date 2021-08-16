import React, { Component } from "react";
// import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

class CustomRoute extends Component {
  state = {
    // isAuthenticated: true,
  };
  renderRoute = () => {
    let isAuthenticated = this.props.user?.isAuthenticated;
    // const { isAuthenticated } = this.state;
    const { isPrivate, path, component, exact } = this.props;
    if (!isPrivate) {
      return <Route path={path} exact={exact} component={component} />;
    } else {
      if (isAuthenticated) {
        return <Route path={path} exact={exact} component={component} />;
      } else {
        return <Redirect to="/login" />;
      }
    }
  };

  // componentDidUpdate(prevProps)

  render() {
    return this.renderRoute();
  }
}
export default CustomRoute;

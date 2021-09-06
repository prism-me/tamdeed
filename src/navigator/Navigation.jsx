import React, { Component } from "react";
import { Redirect, Switch } from "react-router-dom";
import { withRouter, Router } from "react-router-dom";
import { routes } from "./routes";
import Route from "./../components/CustomRoute";
import { connect } from "react-redux";

class Navigation extends Component {

  state = {
    loginModal: false,
  };
  setLoginModal = (status) => { };
  render() {
    return (
      <Switch>
        {/* <Route path="/" exact={true} isPrivate={true} component={Home} /> */}
        {/* <Route
          path="/login"
          exact={true}
          isPrivate={false}
          component={() => (
            <Login
              show={true}
              isPage={true}
              onHide={() => this.props.history.goBack()}
              shiftToRegister={() => {
                this.props.history.push("/register");
                // setRegisterModal(true);
              }}
            />
          )}
        /> */}
        {/* <Route
          path="/register"
          exact={true}
          isPrivate={false}
          component={() => (
            <Register
              show={true}
              isPage={true}
              onHide={() => this.props.history.goBack()}
              shiftToLogin={() => {
                this.props.history.push("/login");
              }}
            />
          )}
        /> */}
        {routes.map((route) => {
          return (
            <Route
              path={`/${this.props.currentLng}${route.path}`}
              exact={route.exact}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          );
        })}
        <Redirect to={`/${this.props.currentLng}`} />
      </Switch>
    );
  }
}

const mapStateToProps = ({ globalReducer }) => ({
  currentLng: globalReducer.currentLng
})

export default connect(mapStateToProps)(withRouter(Navigation));

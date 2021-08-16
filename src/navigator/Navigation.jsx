import React, { Component} from "react";
import { Redirect, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { routes } from "./routes";
import Route from "./../components/CustomRoute";
// import Home from "../pages/Home";
// import Login from "../components/Modals/Login/Login";
// import Register from "../components/Modals/Register/Register";

class Navigation extends Component {
  state = {
    loginModal: false,
  };
  setLoginModal = (status) => {};
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
              path={route.path}
              exact={route.exact}
              component={route.component}
              isPrivate={route.isPrivate}
            />
          );
        })}
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default withRouter(Navigation);

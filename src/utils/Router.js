import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/faculty/Dashboard";
import CreateQuiz from "../pages/faculty/CreateQuiz";
class Router extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/faculty/create" component={CreateQuiz} />
          <Route path="/faculty/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/" exact component={Login} />
        </Switch>
      </div>
    );
  }
}

export default Router;

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Dashboard from "../pages/faculty/Dashboard";
import CreateQuiz from "../pages/faculty/CreateQuiz";
import ReviewQuiz from "../pages/faculty/ReviewQuizes";
import Cookie from "js-cookie";
class Router extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/faculty/review" component={ReviewQuiz} />
					<Route path="/faculty/create" component={CreateQuiz} />
					<Route path="/faculty/dashboard" component={Dashboard} />
					<Route path="/signup" component={Signup} />
					<Route path="/" exact>
						{Cookie.get("token") ? (
							<Redirect to="/faculty/dashboard" />
						) : (
							<Login />
						)}
					</Route>
				</Switch>
			</div>
		);
	}
}

export default Router;

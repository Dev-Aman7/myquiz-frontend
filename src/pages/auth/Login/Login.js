import React, { Component } from "react";
import { Link } from "react-router-dom";

import Option from "../../../component/Option";
import { Input, Button } from "reactstrap";
import classes from "../Login/Login.module.scss";

import axios from "axios";
import Cookie from "js-cookie";

class Login extends Component {
	state = {
		username: "",
		password: "",
		accountType: "student"
	};
	inputHandler = event => {
		let curState = { ...this.state };
		const value = event.target.value;
		const name = event.target.name;
		curState[name] = value;
		this.setState(curState, () => {
			console.log(this.state);
		});
	};
	clickHandler = () => {
		console.log("clicked");
		axios
			.post("/auth/login", {
				...this.state
			})
			.then(result => {
				if (result.data.success === 0) {
					Cookie.set("token", result.data.token);
					console.log(Cookie.get("token"));
					this.props.history.push(result.data.redirectTo);
				}

				console.log(result);
			})
			.catch(err => {
				console.log("error in logging in");
			});
	};
	render() {
		return (
			<div className={classes.container}>
				<div className={classes.login}>
					<p>Login</p>
					<Input
						id="abc"
						placeholder="Username"
						type="text"
						name="username"
						classes="mt4 h3"
						onChange={event => this.inputHandler(event)}
						value={this.state.username}
					/>
					<Input
						id="klm"
						placeholder="Password"
						type="password"
						name="password"
						value={this.state.password}
						onChange={event => this.inputHandler(event)}
					/>
					<Option
						id="hello"
						options={["student", "faculty"]}
						classes="mt4 h5"
						value={this.state.accountType}
						name="accountType"
						onChange={event => this.inputHandler(event)}
					/>
					<Button id="some" color="success" block onClick={this.clickHandler}>
						Submit
					</Button>
					<div className={classes.footer}>
						<Link
							to={"/signup"}
							activeClassName="active"
							className={classes.link}
						>
							create an account
						</Link>
						<Link
							to={"/password/forgot"}
							activeClassName="active"
							className={classes.link}
						>
							forgot password
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;

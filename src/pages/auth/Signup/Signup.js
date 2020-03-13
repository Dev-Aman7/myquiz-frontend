import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import Option from "../../../component/Option";

import classes from "../Signup/Signup.module.scss";
import axios from "axios";
class Login extends Component {
	state = {
		name: "",
		email: "",
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
			.post("/auth/signup", {
				...this.state
			})
			.then(result => {
				console.log("data received", result.data);
				if (result.data.success === 0) {
					this.props.history.push("/");
				} else {
					console.log(result.data.message);
				}
			});
	};
	render() {
		return (
			<div className={classes.container}>
				<div className={classes.signup}>
					Signup
					<Input
						id="jkkk"
						placeholder="Name"
						type="text"
						name="name"
						className="mt4 "
						onChange={event => this.inputHandler(event)}
						value={this.state.name}
					/>
					<Input
						id="jkn"
						placeholder="Email"
						type="text"
						name="email"
						className="mt4 "
						onChange={event => this.inputHandler(event)}
						value={this.state.email}
					/>
					<Input
						id="abc"
						placeholder="Username"
						type="text"
						name="username"
						className="mt4"
						onChange={event => this.inputHandler(event)}
						value={this.state.username}
					/>
					<Input
						id="klm"
						placeholder="Password"
						type="password"
						name="password"
						className="mt4"
						value={this.state.password}
						onChange={event => this.inputHandler(event)}
					/>
					<Option
						id="hello"
						options={["student", "faculty"]}
						classes="mt4 h3"
						value={this.state.accountType}
						name="accountType"
						onChange={event => this.inputHandler(event)}
					/>
					<Button
						id="some"
						name="submit"
						classes="h3 mt2"
						color="success"
						block
						onClick={this.clickHandler}
					>
						Submit
					</Button>
				</div>
			</div>
		);
	}
}

export default Login;

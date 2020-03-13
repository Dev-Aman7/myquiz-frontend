import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, Col, Row, Button, Jumbotron } from "reactstrap";

import Navbar from "../../../component/Navbar";
import * as actionCreators from "../../../store/actions";
// import Axios from "../../../utils/axios";
import classes from "./ReviewQuizes.module.scss";

class ReviewQuizes extends Component {
	state = {
		loading: true
	};

	clickHandler = event => {
		switch (event.target.name) {
			case "delete":
				console.log("delete");
				break;
			case "seeResult":
				console.log("result");
				break;
			case "edit":
				console.log("edit");
				break;
			default:
				console.log("choose something");
		}
	};

	componentDidUpdate = (prevstate, newstate) => {
		console.log("quizes all", this.props.quizes);
		if (this.props.quizes.length > 0 && this.state.loading) {
			this.setState({
				loading: false
			});
		}
	};

	componentDidMount = () => {
		this.props.getQuizes();
	};

	render() {
		let quizes = this.props.quizes.map(elem => {
			return (
				<Card className={classes.card} key={elem._id}>
					<Jumbotron>
						<CardTitle>{elem.quizName}</CardTitle>
					</Jumbotron>

					<hr />
					<Row>
						<Col sm={6}>
							<Button
								className={classes.button}
								color="primary"
								name="edit"
								value={elem._id}
								onClick={event => this.clickHandler(event)}
							>
								Edit
							</Button>
							<Button
								className={classes.button}
								name="seeResult"
								value={elem._id}
								color="success"
								onClick={event => this.clickHandler(event)}
							>
								See result
							</Button>
							<Button
								className={classes.button}
								name="delete"
								color="danger"
								value={elem._id}
								onClick={event => this.clickHandler(event)}
							>
								Delete
							</Button>
						</Col>
					</Row>
				</Card>
			);
		});

		return (
			<div>
				<Navbar />
				{this.state.loading === true ? "Loading" : quizes}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		quizes: state.reviewQuiz.quizes
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getQuizes: () => dispatch(actionCreators.getQuizes())
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewQuizes);

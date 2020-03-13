import React, { Component } from "react";
import { Input, Card, CardImg, CardBody, CardText, Button } from "reactstrap";
import cogoToast from "cogo-toast";
import { connect } from "react-redux";
import Cookie from "js-cookie";

import * as actionCreators from "../../../store/actions";
import quiz from "../../../assets/quiz.png";
import classes from "./CreateQuiz.module.scss";
import Modal from "../../../component/Modal";
import Axios from "../../../utils/axios";

class CreateQuiz extends Component {
	state = {
		show: false,
		showModal: false
	};
	show = () => {
		this.setState({
			show: !this.state.show
		});
	};
	showModal = () => {
		this.setState({
			showModal: !this.state.showModal
		});
	};
	onSubmit = () => {
		console.log({
			quizName: this.props.quizName,
			questions: this.props.questions,
			time: this.props.time
		});
		const quizData = {
			quizName: this.props.quizName,
			questions: this.props.questions,
			time: this.props.time
		};
		console.log("sending oaxios requet");
		Axios.post("/faculty/create", quizData).then(response => {
			console.log(response.data);
			if (response.data.success === 0) {
				console.log("token", Cookie.get("token"));
				cogoToast.success(response.data.message);
				this.props.history.push("/faculty/dashboard");
			} else {
				cogoToast.info(response.data.message);
			}
		});
	};
	componentDidUpdate = () => {
		console.log("in update");
		console.log(this.props.questions);
	};
	render() {
		return (
			<div className={classes.container}>
				{this.state.showModal ? (
					<div className={classes.modalcontainer}>
						<Modal
							questions={this.props.questions}
							quizName={this.props.quizName}
							time={this.props.time}
							onClick={this.showModal}
						/>
					</div>
				) : null}
				{!this.state.show ? (
					<Card className={classes.card}>
						<CardImg src={quiz} alt="Create Quiz" className={classes.image} />
						<CardBody>
							<CardText>
								<Input
									type="text"
									id="abc"
									placeholder="Enter title of quiz"
									name="quizName"
									onChange={event => this.props.inputChangeHandler(event)}
									value={this.props.quizName}
								/>
								<Input
									type="number"
									id="def"
									placeholder="Enter time in seconds"
									name="time"
									className="mt2"
									onChange={event => this.props.inputChangeHandler(event)}
									value={this.props.time}
								/>
							</CardText>
							<Button
								color="primary"
								className={classes.button}
								onClick={this.show}
							>
								Next
							</Button>
						</CardBody>
					</Card>
				) : (
					this.props.questions.map((element, index) => (
						<div key={`qus-${index}`} className={classes.quscard}>
							<div className={classes.qusTop}>
								<div>Qus {index + 1}.</div>
								<div
									className={classes.delete}
									onClick={() => this.props.deleteQuestion(index)}
								>
									<i className="fas fa-window-close"></i>
								</div>
							</div>
							<Input
								type="text"
								name="title"
								id="title"
								placeholder="enter the title"
								value={this.props.questions[index].title}
								onChange={event =>
									this.props.quizInputChangeHandler(event, index)
								}
								className="mt4"
							/>
							<hr />
							<Input
								type="text"
								name="option1"
								id="option1"
								placeholder="enter the option"
								value={this.props.questions[index].option1}
								onChange={event =>
									this.props.quizInputChangeHandler(event, index)
								}
								className="mt2"
							/>
							<Input
								type="text"
								name="option2"
								id="option2"
								placeholder="enter the option"
								value={this.props.questions[index].option2}
								onChange={event =>
									this.props.quizInputChangeHandler(event, index)
								}
								className="mt2"
							/>
							<Input
								type="text"
								name="option3"
								id="option3"
								placeholder="enter the option"
								value={this.props.questions[index].option3}
								onChange={event =>
									this.props.quizInputChangeHandler(event, index)
								}
								className="mt2"
							/>
							<Input
								type="text"
								name="option4"
								id="option4"
								placeholder="enter the option"
								value={this.props.questions[index].option4}
								onChange={event =>
									this.props.quizInputChangeHandler(event, index)
								}
								className="mt4"
							/>
							<hr />
							<Input
								type="number"
								name="answer"
								id="answer"
								placeholder="answer"
								value={this.props.questions[index].answer}
								onChange={event =>
									this.props.quizInputChangeHandler(event, index)
								}
								max="4"
								min="1"
							/>
						</div>
					))
				)}
				{this.state.show ? (
					<div className={classes.footerButton}>
						<Button color="primary" onClick={() => this.props.addQuestion()}>
							Add
						</Button>
						<Button
							color="primary"
							onClick={this.onSubmit}
							style={{ margin: "1rem" }}
						>
							submit
						</Button>
						<Button
							color="success"
							onClick={this.showModal}
							style={{ margin: "1rem" }}
						>
							Preview
							<i className="fas fa-film"></i>
						</Button>
					</div>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		quizName: state.createQuiz.quizName,
		questions: state.createQuiz.questions,
		time: state.createQuiz.time
	};
};

const mapDispatchToProps = dispatch => {
	return {
		inputChangeHandler: event =>
			dispatch(
				actionCreators.inputChange({ [event.target.name]: event.target.value })
			),
		quizInputChangeHandler: (event, index) =>
			dispatch(actionCreators.quizInputChange(event, index)),
		addQuestion: () => dispatch(actionCreators.addQuestion()),
		deleteQuestion: id => dispatch(actionCreators.deleteQuestion(id))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuiz);

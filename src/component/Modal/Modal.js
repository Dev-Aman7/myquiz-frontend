import React from "react";
import {
	Card,
	// CardImg,
	// CardText,
	CardBody,
	CardTitle,
	// CardSubtitle,
	Button
} from "reactstrap";
import classes from "./Modal.module.scss";
const Modal = props => {
	const quesArray = props.questions.map((elem, index) => {
		return (
			<div>
				<Card>
					<CardTitle className={classes.header}>
						<div>
							{index + 1}. {elem.title}
						</div>
						<div>{elem.time}</div>
					</CardTitle>
					<CardBody>
						<ul>
							<li>
								<input type="radio" value={elem.option1} />
								{elem.option1}
							</li>
							<li>
								<input type="radio" value={elem.option2} />
								{elem.option2}
							</li>
							<li>
								<input type="radio" value={elem.option3} />
								{elem.option3}
							</li>
							<li>
								<input type="radio" value={elem.option4} />
								{elem.option4}
							</li>
						</ul>
						<div> answer: {elem.answer}</div>
					</CardBody>
				</Card>
			</div>
		);
	});
	return (
		<div className={classes.container}>
			<Card className={classes.main}>
				<CardTitle>
					<header>
						<h3>{props.quizName}</h3>
						<h3>{props.time}</h3>
					</header>
				</CardTitle>
				<CardBody>{quesArray}</CardBody>
				<Button color="danger" onClick={props.onClick}>
					Close
				</Button>
			</Card>
		</div>
	);
};

export default Modal;

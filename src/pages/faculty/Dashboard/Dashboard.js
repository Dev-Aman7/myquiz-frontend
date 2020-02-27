import React, { Component } from "react";
import Card from "../../../component/Card";
import classes from "./Dashboard.module.scss";
import Navbar from "../../../component/Navbar";
import createQuiz from "../../../assets/createQuiz.jpg";
import updateQuiz from "../../../assets/updateQuiz.jpg";
import result from "../../../assets/result.png";
class Dashboard extends Component {
  create = () => {
    this.props.history.push("/faculty/create");
  };
  reviewQuiz = () => {
    this.props.history.push("/faculty/reviewQuiz");
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <div className={classes.container}>
          <Card
            img={createQuiz}
            title="Create Quiz"
            subtitle="Create an interactive quiz"
            text="This is a normal quiz"
            btnText="Create Quiz"
            onClick={this.create}
          />
          <Card
            img={result}
            title="See previous quizs"
            subtitle="See performances of your students and update"
            text="Here you find and update the quiz"
            btnText="review quizes"
            onClick={this.reviewQuiz}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;

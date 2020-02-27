import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
class ReviewQuizes extends Component {
  componentDidMount = () => {};
  render() {
    return <div></div>;
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

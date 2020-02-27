import * as actionTypes from "./actionTypes";

export const addQuestion = () => {
  console.log("addUestion Action creator");
  return {
    type: actionTypes.ADD_QUESTION
  };
};

export const deleteQuestion = id => {
  console.log("deleteQUestion Action creator");
  return {
    type: actionTypes.DELETE_QUESTION,
    id: id
  };
};

export const inputChange = event => {
  console.log("Here' i am ", event);
  return {
    type: actionTypes.INPUT_CHANGE,
    event
  };
};

export const quizInputChange = (event, id) => {
  return {
    type: actionTypes.QUIZ_INPUT_CHANGE,
    event,
    id: id
  };
};

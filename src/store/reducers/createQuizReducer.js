import * as actionTypes from "../actions/actionTypes";
// import { inputChange, quizInputChange } from "../actions";

const initialState = {
  qusCount: "",
  quizName: "",
  questions: [
    {
      title: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      answer: 1
    }
  ],
  time: 0
};

const addQuestion = state => {
  const updatedArray = state.questions.concat({
    title: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: 1
  });
  //   console.log("here is", updatedArray);
  return {
    ...state,
    questions: updatedArray
  };
};
const deleteQuestion = (state, action) => {
  console.log("I came in deleteQuestion");
  const updatedArray = state.questions.filter(
    (result, index) => index !== action.id
  );
  return {
    ...state,
    questions: updatedArray
  };
};

const inputChange = (state, action) => {
  return {
    ...state,
    ...action.event
  };
};
const quizInputChange = (state, action) => {
  let updatedArray = [...state.questions];

  updatedArray[action.id][action.event.target.name] = action.event.target.value;
  console.log("updated array", updatedArray);
  return {
    ...state,
    questions: updatedArray
  };
};

const reducer = (state = initialState, action) => {
  console.log("My type is", action.type);
  switch (action.type) {
    case actionTypes.ADD_QUESTION: {
      console.log("in reducer");
      return addQuestion(state);
    }

    case actionTypes.DELETE_QUESTION:
      return deleteQuestion(state, action);
    case actionTypes.INPUT_CHANGE:
      return inputChange(state, action);
    case actionTypes.QUIZ_INPUT_CHANGE:
      return quizInputChange(state, action);
    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  quizes: []
};

const allQuiz = (state, action) => {
  return {
    ...state,
    quizes: action.quizes
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.QUIZES:
      return allQuiz(state, action);
    default:
      return state;
  }
};

export default reducer;

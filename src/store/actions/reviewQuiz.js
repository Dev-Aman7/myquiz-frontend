import * as actionTypes from "./actionTypes";
import axios from "axios";

const quizes = response => {
  return {
    type: actionTypes.QUIZES,
    quizes: response
  };
};
export const getQuizes = () => {
  console.log("addUestion Action creator");
  return dispatch => {
    axios.get("/quizes").then(response => {
      dispatch(quizes(response));
    });
  };
};

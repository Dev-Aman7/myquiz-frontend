import * as actionTypes from "./actionTypes";
import axios from "../../utils/axios";

const quizes = response => {
	return {
		type: actionTypes.QUIZES,
		quizes: response.data.quizes
	};
};
export const getQuizes = () => {
	console.log("addUestion Action creator");
	return dispatch => {
		axios.get("/faculty/getQuizes").then(response => {
			dispatch(quizes(response));
		});
	};
};

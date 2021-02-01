import { saveQuestion, saveQuestionAnswer } from '../utils/api';

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER'

export function getQuestions(questions){
    return {
        type: GET_QUESTIONS,
        questions
    }
}
export function handleAddQuestion(info) {
	console.log('info',info)
	return (dispatch, getState) => {
		const {authedUser} = getState();
		const {optionOneText, optionTwoText} = info;
		console.log('info 2',info)
		return saveQuestion({author: authedUser, optionOneText, optionTwoText})
			.then((question) => dispatch(addQuestion(question)))
	}
}

function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	}
}
export function addQuestionAnswer(authedUser, qid, answer) {
	return {
		type: ADD_QUESTION_ANSWER,
		authedUser,
		qid,
		answer
	}
}

export function handleAddAnswer(qid, answer)  {
	return (dispatch, getState) => {
		const {authedUser} = getState();
		const info = {qid, answer, authedUser};

		dispatch(addQuestionAnswer(info));

		return saveQuestionAnswer(info)
			.catch((e) => {
				console.warn('Error', e);
				dispatch(addQuestionAnswer(info));
				alert('There was an error linking the tweet. Try again.');
			})
	}
}


import { getInitialData } from '../utils/api'
import { recieveUsers } from '../actions/users'
import { getQuestions } from '../actions/questions'

function handleInitialData() {
    return (dispatch) => {
        return getInitialData
            .then(({ users, questions }) => {
                dispatch(recieveUsers(users)),
                dispatch(getQuestions(questions))
            })
    }
}
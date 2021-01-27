export const RECIEVE_USERS = 'RECIEVE_ USERS'
export const ADD_USER = 'ADD_USER'

import { saveUser } from '../utils/api';


export function recieveUsers(users) {
    return{
        type:RECIEVE_USERS,
        users,
    }   
}
function addAnswerToUser(authUser, qid, answer) {
    return {
      type: ADD_ANSWER_TO_USER,
      authUser,
      qid,
      answer
    }
  }
  
  function addUser(user) {
    return {
      type: ADD_USER,
      user
    }
  }
  
  export function handleAddUser(info) {
    return (dispatch) => {
  
      return saveUser(info)
        .then((user) => {
          dispatch(addUser(user));
        })
    }
  }
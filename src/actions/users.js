
export const RECIEVE_USERS = 'RECIEVE_ USERS'
export const ADD_USER = 'ADD_USER'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'



export function recieveUsers(users) {
    return{
        type:RECIEVE_USERS,
        users,
    }   
}
export function addAnswerToUser(authUser, qid, answer) {
    return {
      type: ADD_ANSWER_TO_USER,
      authUser,
      qid,
      answer
    }
  }
  
 export function addUser(user) {
    return {
      type: ADD_USER,
      user
    }
  }
export const RECIEVE_USERS = 'RECIEVE_ USERS'

export function recieveUsers(users) {
    return{
        type:RECIEVE_USERS,
        users,
    }   
}
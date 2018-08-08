import * as constants from '../constants'

const initialState = {
    data: []
}

const user = (state = initialState, action)=> {
    switch(action.type){
        case constants.RECIEVE_USER:
        return {
            ...state,
            data: action.users
        }
        case constants.LOGOUT_USER:
        return {
            ...state,
            data: action.users
        }
        default:
        return state;
    }
}

export default user;
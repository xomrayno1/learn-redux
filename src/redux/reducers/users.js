import {GET_USERS_FAILED, GET_USERS_REQUEST, GET_USERS_SUCCESS} from '../../common/Constant'

const initalState = {
    users: [],
    isLoading: false,
    error : null
}

export default function users(state = initalState, action){
    const {type, payload,message } = action;
    switch(type){
        case GET_USERS_REQUEST:
            return {
                ...state,
                isLoading : true
            }
        case GET_USERS_SUCCESS :
            return {
                ...state,
                isLoading : false,
                users : payload
            }
        case GET_USERS_FAILED : 
            return {
                ...state,
                isLoading : false,
                error : message
            }
        default:
            return state; 
        
    }
}

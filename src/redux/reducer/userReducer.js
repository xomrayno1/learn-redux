import {SET_USER} from '../../common/Constant';

const initalState = {
        id:  '',
        name: '',
        username: '',
        email: '',                                                                                                                                            
}

export default function users(state = initalState, action){
    const {type, payload } = action;
    switch(type){
        case SET_USER:
            return {
                ...state,
               id : payload["id"],
               name: payload['name'],
               username: payload['username'],
               email: payload['email']
            }
        default :
            return state;    
    }
    

}
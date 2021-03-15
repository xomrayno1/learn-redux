import {IN_CREASE, DE_CREASE} from '../../common/Constant';

const initalState = {
    count: 0                                                                                                                                                   
}

export default function users(state = initalState, action){
    const {type, payload } = action;
    switch(type){
        case IN_CREASE:
            return {
                ...state,
                count : payload + 1
            }
        case DE_CREASE:
            return {
                count:  payload - 1
            }
        default :
            return state;    
    }
    

}
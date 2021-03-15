import {IN_CREASE, DE_CREASE,SET_USER} from '../../common/Constant';

export const countInCrease = (count) =>{
    return {
        type : IN_CREASE,
        payload : count 
    }
}
export const countDeCrease = (count) =>{
    return {
        type : DE_CREASE,
        payload : count  
    }
}
export const setUser = (data) => {
    return {
        type : SET_USER,
        payload : data
    }
}
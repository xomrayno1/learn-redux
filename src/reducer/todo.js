const initalState = {
    item : []
}
const ADD_TODO = "ADD_TODO";
 


const reducer = (state = initalState, action)=>{
    const {type, payload} = action;
    switch(type){
        case 'ADD_TODO':
            return {
                ...state,
                item : [...state.item,payload]
            }
        case 'SET_TODO':
            return {
                ...state,
                item : [...state.item, payload]
            }
        default : 
            return state;
    }
}
export default reducer
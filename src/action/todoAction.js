
const ADD_TODO = "ADD_TODO";
const SET_TODO = "SET_TODO";

export const addToDo = (text) => {
    return {
        type : ADD_TODO,
        payload : text
    }
}
export const setTodo = (text) => {
    return {
        type : SET_TODO,
        payload : text
    }
}
export const fetchTodo = () => async ( dispatch ) =>{
    console.log("fetch to do")
    dispatch(setTodo("hello"));

}
 
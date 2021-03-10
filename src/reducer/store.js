import { createStore,combineReducers,applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todo'
import thunk from 'redux-thunk'


const reducer =  combineReducers({
    todo : todoReducer
})
// function myMiddleware(store){
//     return function(next){
//         return function(action){

//         }
//     }
// }

const myMiddleWare = store =>  next => action => {
    console.log('Action',action, store.getState());
    if( action.type === 'ADD_TODO' && action.payload === 'fuck'){
        action.payload = '****';
    }
    return  next(action);
}           //dispatch(action)        

//                                 //dispatch
// const asynMiddleWare = store => next => action => {
//     if(typeof action === 'function'){
//         return action(next)
//     }
//     return next(action);
// }


export default configureStore({ // mặc định redux toolkit đã add sẵn thunk
    reducer
})
// export default createStore(reducer ,applyMiddleware(myMiddleWare,thunk));
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 


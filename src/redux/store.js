import rootReducer from "./reducer"
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


// const store =  compose(
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// )(createStore(rootReducer))
const demoMiddleWare = store => next =>  action =>{
    console.log("middle ware")
    return next(action);
}
// const asyncMiddleWare = store => next => aciton => {
//     if(typeof aciton === 'function'){
//         return action(next);
//     }
//     return next(action)
// }
 

const store = createStore(rootReducer,applyMiddleware(thunk))
export default store;
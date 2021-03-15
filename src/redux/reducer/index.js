import {  combineReducers  } from 'redux';
import countReducer from './countReducer'
import userReducer from './userReducer'
const rootReducer =  combineReducers({
    count: countReducer,
    user : userReducer,
})
export default rootReducer;


//generator
 
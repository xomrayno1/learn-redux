import {all} from 'redux-saga/effects'
import userSage  from './userSage'

export default function* rootSaga(){
    yield all([
        userSage(),
    ])
}
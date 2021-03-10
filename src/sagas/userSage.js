import {call, put, takeEvery } from 'redux-saga/effects'

import {
    GET_USERS_SUCCESS,
    GET_USERS_FAILED,
    GET_USERS_REQUEST
        } from '../common/Constant'

const apiUrl = "http://jsonplaceholder.typicode.com/users";

function getApi(){
    return fetch(apiUrl,{
        method : 'GET',
        headers : {
            'Content-Type' : "application/json",
        }
    }).then(response => response.json())
    .catch(error => {throw error});
}
function* fetchUsers(action){
    try{
        const users = yield call(getApi);
        yield put({type : GET_USERS_SUCCESS, payload : users})
    }catch(e){
        yield put({type: GET_USERS_FAILED, message: e.message});
    }
}

function* userSaga(){
    yield takeEvery(GET_USERS_REQUEST,fetchUsers);
}

export default userSaga;
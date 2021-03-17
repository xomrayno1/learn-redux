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
        //call : gọi function .  Nếu nó return về promise , 
        //tạm dừng saga cho đến khi nào giải quyết đc
        yield put({type : GET_USERS_SUCCESS, payload : users})
        //yield : chạy từng tự khi nào trả ra kết quả mới thực thi tiếp.
        //put : dispatch 1 action 
        
    }catch(e){
        yield put({type: GET_USERS_FAILED, message: e.message});
    }
}


function* userSaga(){
    yield takeEvery(GET_USERS_REQUEST,fetchUsers);
    //takeEvery theo dõi một action nào đó thay đổi thì gọi 1 saga nào đó 
    //takeLastest() : có nghĩa là nếu chúng ta thực hiện một loạt các actions,
            // nó sẽ chỉ thực thi và trả lại kết quả của của actions cuối cùng.
    //take() : tạm dừng cho đến khi nhận được action.
}

export default userSaga;
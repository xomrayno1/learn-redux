import {GET_USERS_REQUEST} from '../../common/Constant'

export const getUsers = (data) => ({
    type : GET_USERS_REQUEST,
    payload : data,
    message : ''
})
import React, { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import Card from './CardComponents'
import {getUsers} from '../redux/action/usersAction'

function Users(props) {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);
    
    useEffect(() => {
        dispatch(getUsers());
    },[])

    return (
        <>  
            {
                users.loading && <p>Loading...</p>
            }
            {
                users.length > 0 &&    users.map( item => {
                   return  <Card key={item.id}  users={item}/>
                })
            }{
                users.length === 0 && !loading && <p>No users available</p>
            }{
                error && !loading && <p>{error}</p>
            }
        </>
         
    );
}

export default Users;
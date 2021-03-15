import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from 'react-redux'
import {countInCrease, countDeCrease, setUser} from '../redux/action/action'

CountComponent.propTypes = {
    count : PropTypes.string
};
CountComponent.defaultProps = {
    count : ''
}
function CountComponent(props) {
    const count   = useSelector(state => state.count.count);
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    function fetchApi(){
       const fetchByid =  async () => {
        const response =  await fetch('http://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        dispatch(setUser(response))
       }
       fetchByid(); 
    }
    useEffect(() => {
        dispatch(fetchApi);
    },[])
    const handleInCrease = ()=>{
         dispatch(countInCrease(count))
    }
    const handleDeCrease = ()=>{
        dispatch( countDeCrease(count));
    }
    return (
        <div>
            <h1>{user.name} - {user.email} - {user.username}</h1>
            <h1>{count}</h1>
            <button onClick={handleInCrease}> + </button>
            <button onClick={handleDeCrease}> - </button>
        </div>
    );
}

export default CountComponent;
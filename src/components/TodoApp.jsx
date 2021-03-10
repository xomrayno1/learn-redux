import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch  } from 'react-redux';

import reducer from '../reducer/todo';
import { addToDo, fetchTodo } from '../action/todoAction'

TodoApp.propTypes = {
    
};

function TodoApp(props) {
    const [text, setText] = useState("");
    const  todos = useSelector( state => state.todo.item);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchTodo());
       
    },[])

    function handleOnClickAddItem(){
        dispatch(addToDo(text))
    }
    
    return (
        <div>
            <input  type="text" value={text} 
                    onChange={ (e) => setText(e.target.value)} 
                    />
            <button onClick={handleOnClickAddItem}>Add</button>
            <ul>
                {
                    todos.map((item,index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default TodoApp;
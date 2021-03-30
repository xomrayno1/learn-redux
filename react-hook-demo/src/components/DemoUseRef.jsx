import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function DemoUseRef(props) {
    const [count, setCount] = useState(0);
    const preCount = useRef(count);
    console.log("useRef")
    useEffect(()=>{
        console.log("effect")
        preCount.current =count; // set giá trị curren bằng count 
                                    // đến đoạn này ko render lại nữa
    },[count])
    const handleClick = () => {
        console.log('click')
        setCount( count + 1);
    }
    console.log("useRef 1")
    return (
        <div>
            <p>{preCount.current}</p>
            <p>{count}</p>  
            <button onClick={handleClick}>inCrease</button>      
        </div>
    );
}

export default DemoUseRef;
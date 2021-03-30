import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
    
};
Clock.defaultProps = {}

function formatDate(date){
    if(!date){return}
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours} : ${minutes} : ${seconds}`;
}

function Clock(props) {
    // const [timeString, setTimeString ] = useState('');
    // console.log('load..')
    // useEffect( () => {
    //     console.log('1')
    //     const clockInterval =   setInterval( () => {
    //         const now = new Date();
    //         //hh:MM:ss
    //         const newTimeString = formatDate(now);
    //         setTimeString(newTimeString) // set giá trị state nên nó sẽ render lại
    //     },1000)
    //     return () => {
    //         //clean up
    //         console.log("did mount")
    //         clearInterval(clockInterval);
    //     }
    // },[])
    const {timeString} = useClock();
    return (
        <div>
            <p style={{ fontSize: '22px' }}>{timeString}</p>
        </div>
    );
}
    function useClock(){
        const [timeString, setTimeString ] = useState('');
        useEffect( () => {   
        const clockInterval =   setInterval( () => {
                const now = new Date();
                //hh:MM:ss
                const newTimeString = formatDate(now);
                setTimeString(newTimeString) // set giá trị state nên nó sẽ render lại
                console.log("time")
            },1000)
            return () => {
                //clean up
                 
                clearInterval(clockInterval);
            }
        },[])
        
        return {timeString};
    }
export default Clock;
// Implement a button and timer that will start from 10 and ends at 0 and tracks the counter until timer expires and button should disappear once timer expires.

import { useEffect, useState, useRef } from "react"

const MaxCount = ()=>{
    const [timer, setTimer] = useState(10);
    const [counter, setCounter] = useState(0);
    const timerInt = useRef(null)

    useEffect(()=>{
        timerInt.current = setInterval(()=>{
            setTimer(prev=>prev-1)
        },1000)
        return ()=>{
            clearInterval(timerInt.current)
        }
    },[])

    useEffect(()=>{
        if(timer==0){
            clearInterval(timerInt.current)
        }
    },[timer])

    const incrementCounter =()=>{
        setCounter((prev)=>prev+1)
    }
    return <>
        <p>No of clicks until timer expires</p>
        <div style={{backgroundColor:'orange', width: '100px', height: '100px'}}>
            <p>{counter}</p>
            <p>Time left: {timer} seconds</p>
            {timer>0 && <button onClick={incrementCounter}>+</button>}
        </div>
    </>
}

export default MaxCount
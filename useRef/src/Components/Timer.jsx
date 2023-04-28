import React, { useEffect, useRef, useState } from 'react'
import './style.css'

const Timer = () => {
    const [timer, setTimer] = useState(0)
    let timerID = useRef(null)
    let h2ref = useRef(null)
    let startButton = useRef(null)
    let stopButton = useRef(null)

    useEffect(() => {
        
        if (timer === 0) {
            stopButton.current.disabled = true;
            h2ref.current.innerText = `Timer Value is ${timer}`;
            h2ref.current.style.color = "black"

        } else {
            h2ref.current.innerText = `Timer Started & Value is ${timer}`
            h2ref.current.style.color = "green"

        }
    })

    const startTimer = () => {
        startButton.current.disabled = true;
        stopButton.current.disabled = false;
        timerID.current = setInterval(() => {
            setTimer((preTime) => preTime + 1)
        }, 1000)
    };

    const stopTimer = () => {
        h2ref.current.innerText = `Timer Stop & Value is ${timer}`
        h2ref.current.style.color = "red"
        startButton.current.disabled = false;
        stopButton.current.disabled = true;
        clearInterval(timerID.current)
    }

    return (
        <div className='OuterBox'>
            <h2 ref={h2ref}>Timer is {timer}</h2>
            <br /> <br />
            <button onClick={startTimer} ref={startButton}>Start</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={stopTimer} ref={stopButton}>Stop</button>
        </div>
    )
}

export default Timer
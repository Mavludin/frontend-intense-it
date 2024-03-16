import { useRef } from 'react';
import './App.css'
import { useState } from 'react'

/*
Когда используются рефы
- Для хранения таймеров (setInterval, setTimeout);
- Для получения доступа к DOM узлам (input, div, form): focus, blur, scroll
*/

// let timerId = 0;

export const Timer = () => {
  const intervalRef = useRef(null);

  // const [count, setCount] = useState(0)

  // const onClick = () => {
  //   ref.current = 'Changed!!!'

  //   setCount(count + 1)
  // }

  // console.log(ref)

  const onStartTimer = () => {
    intervalRef.current = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)
  }

  const onPauseTimer = () => {
    clearInterval(intervalRef.current)
  }

  const onResetTimer = () => {
    setSeconds(0)

    clearInterval(intervalRef.current)
  }

  const [seconds, setSeconds] = useState(0)

  return (
    <div className='app'>
      <div>{seconds}</div>
      <button onClick={onStartTimer}>Start/Resume</button>
      <button onClick={onPauseTimer}>Pause</button>
      <button onClick={onResetTimer}>Reset</button>
    </div>
  )
}

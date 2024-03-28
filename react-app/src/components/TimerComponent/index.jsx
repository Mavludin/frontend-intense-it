import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export const TimerComponent = () => {
  const timerRef = useRef(0)

  const [count, setCount] = useState(0)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((count) => {
        count += 1

        console.log(count)

        return count
      })

      // console.log(2222)

    }, 1000)

    return () => {
      console.log(123)
      
      // clearInterval(timerRef.current)
    }
  }, [])

  return (
    <h2>Timer component</h2>
  )
}

import { useEffect, useState, useMemo, useCallback } from "react";
import "./App.css";
import { Blog } from "./components/Blog";
import { useIsOnline } from "./hooks/useIsOnline";
import { Post } from "./components/Post";
import { Dashboard } from "./components/Dashboard";
import { TestPost } from "./components/TestPost";
import { CustomButton } from "./components/CustomButton";
import { StyledButton } from "./components/StyledButton";
import { Switch } from 'antd';

import { Button } from 'antd'
import { DummyComponent } from "./components/DummyComponent";

const buttons = [
  'Button 1',
  'Button 2',
  'Button 3',
  'Button 4',
]

const numbers = [1, 2, 3, 4];

function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(false)
  const [posts, setPosts] = useState(0)

  const increment = () => {
    // setCount(1)

    setCount(count + 1)
  }

  const getPosts = useCallback(async () => {
    try {
      const res = await fetch('https://posts.com');

      if (res.ok) {
        setPosts(await res.json())

        return
      }

      throw new Error('Что-то пошло не так')
    } catch (err) {
      console.error(err)
    }
  }, [])

  const num = count * 2 // Примитив. Нет смысла мемоизировать

  // const filteredNumbers = numbers.filter((num) => {
  //   return num !== count
  // })

  const filteredNumbers = useMemo(() => {
    return numbers.filter((num) => {
      return num !== count
    })
  }, [count])

  // const numbers = [1, 2, 3, 4]

  useEffect(() => {
    // const numbers = [1, 2, 3, 4]

    console.log(count)

    // console.log(filteredNumbers)

    // console.log(numbers)
  }, [count])

  useEffect(() => {
    console.log(filteredNumbers)
  }, [filteredNumbers])

  // 1 отрисовка count = 0 (log: 0)
  // 2 отрисовка count = 1 (log: 1)
  // 3 отрисовка count = 1 

  return (
    <div className="app">
      <h1>React App</h1>

      <button onClick={increment}>Click</button>

      <ul>
        {filteredNumbers.map((num) => {
          return <li key={num}>{num}</li>;
        })}
      </ul>

      <DummyComponent num={10} getPosts={getPosts} />
    </div>
  );
}

export default App;

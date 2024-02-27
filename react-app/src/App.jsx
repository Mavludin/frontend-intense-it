// Состояние (state)
// hooks (хуки)
// useState

// import { useState } from 'react';
import { Counter } from './components/Counter';
import './App.css';
import { ShowMoreText } from './components/ShowMoreText';
import { CounterBy } from './components/CounterBy';

/*
Создать компонент CounterBy, 
в котором есть состоние count(0) и проп incrementBy
- При клике на кнопку 
Increment by {incrementBy}, 
увеличить значение count на incrementBy
- Если проп incrementBy не передан, 
то по умолчанию = 1
*/

function App() {
  // let count = 0;

  // const incrementCount = () => {
  //   count = count + 1;

  //   console.log(count);
  // }

  // const counter = useState(0);
  // const count = counter[0]
  // const setCount = counter[1]

  // const [count, setCount] = useState(0);
  // const [showMore, setShowMore] = useState(true);

  // const incrementCount = () => {
  //   setCount(count + 1);
  // }

  // const resetCounter = () => {
  //   setCount(0);
  // }

  // const toggleShowMore = () => {
  //   setShowMore(!showMore)
  // }

  // const [state, setState] = useState()

  return (
    <div className='app'>
     {/* <h1>{count}</h1>

    <div>
     <button onClick={incrementCount}>Increment</button>
     <button onClick={resetCounter}>Reset counter</button>
    </div> */}

    {/* <Counter />

    <Counter />

    <Counter />

    <ShowMoreText />
    
    <ShowMoreText /> */}

    {/* <div>
      <button onClick={toggleShowMore}>
        Show more
      </button>

      {showMore && (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem cum iure ipsa modi iusto eligendi, architecto accusamus in, animi qui eum officia suscipit quibusdam, totam laborum ipsam error ea aspernatur!
        </p>
      )}

    </div> */}

    <CounterBy />

    <CounterBy incrementBy={2} />

    <CounterBy incrementBy={5} />
    </div>
  )
}

export default App

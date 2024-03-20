import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import { VideoPlayer } from './components/VideoPlayer'

const foo = () => {
  console.log('Код при прогрузке страницы')
}

const STATIC_STRING = 'Static string'

function App({ rate }) {
  // состояние

  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  const [showPlayer, setShowPlayer] = useState(false)

  // console.log(1)

  // useEffect(() => {
  //   console.log('Код выполняется всегда')
  // })

  // useEffect(() => {
  //   console.log('Код при прогрузке страницы')
  // }, [])

  // useEffect(() => {
  //   console.log('второй эффект!')

  //   if (count * rate >= 5) {
  //     console.log('ГОТОВО!!!')
  //   }
  // }, [count, rate, count1]) // count1 не должен быть в этом массиве
  
  // useEffect(() => {
  //   console.log(STATIC_STRING)
  // }, []) // статические данные не меняются

  const onShowPlayer = () => {
    setShowPlayer(true)
  }

  const onHidePlayer = () => {
    setShowPlayer(false)
  }
  
  // console.log(2)

  return (
    <div className='app'>
    <h1>Разметка</h1>

    <div>{count}</div>
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
    
    <div>
      <button onClick={onShowPlayer}>Show</button>
      <button onClick={onHidePlayer}>Hide</button>
    </div>

    {showPlayer && (
      <VideoPlayer />
    )}

    </div>
  )
}

export default App

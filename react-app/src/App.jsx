import './App.css'

import { Button } from './components/Button/Button'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'

function App() {
  return (
    <div id="app">

      <Header />

      <main>
        <h1>React app</h1>

        {/* <Button>

        </Button> */}

        <Button />
      </main>

      <Footer />

    </div>
  )
}

export default App

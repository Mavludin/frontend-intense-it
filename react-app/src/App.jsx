import { useContext } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

import './App.css'
import { ThemeContext, ThemeProvider } from "./context/ThemeProvider";
import { useThemeContext } from "./hooks/useThemeContext";

function App() {
  // const [mode, setMode] = useState("light");

  // const toggleMode = () => {
  //   setMode(mode === 'light' ? 'dark' : 'light');
  // }
  const { mode } = useThemeContext()

  return (
    <div
      className='app'
      style={{ backgroundColor: mode === 'dark' && 'black' }}
    >
      <Header />

      {/* <AnotherProvider>
        <SomeComponent />
      </AnotherProvider> */}

      <Main />
    </div>
  )
}

export default App

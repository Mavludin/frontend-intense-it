import { useEffect, useState } from "react";
import "./App.css";
import { Blog } from "./components/Blog";
import { useIsOnline } from "./hooks/useIsOnline";
import { Post } from "./components/Post";
import { Dashboard } from "./components/Dashboard";
import { TestPost } from "./components/TestPost";
import { CustomButton } from "./components/CustomButton";

const buttons = [
  'Button 1',
  'Button 2',
  'Button 3',
  'Button 4',
]

function App() {
  const isOnline = useIsOnline()

  const [activeButtonIndex, setActiveButtonIndex] = useState(0)

  console.log(isOnline)

  return (
    <div className="app">
      {/* <Blog /> */}

      {/* <Dashboard /> */}

      {/* <Post id="1" /> */}

      {/* <TestPost /> */}

      {/* <CustomButton text="Click" />
      <CustomButton text="Click" disabled />
      <CustomButton text="User 5" active /> */}

      {buttons.map((button, index) => {
        return (
          <CustomButton
            key={button}
            text={button}
            active={index === activeButtonIndex}
            onClick={() => setActiveButtonIndex(index)}
          />
        )
      })}
    </div>
  );
}

export default App;

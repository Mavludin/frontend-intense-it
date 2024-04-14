import { useEffect, useState } from "react";
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

const buttons = [
  'Button 1',
  'Button 2',
  'Button 3',
  'Button 4',
]

function App() {
  // const isOnline = useIsOnline()

  const [activeButtonIndex, setActiveButtonIndex] = useState(0)
  const [buttonsDisabled, setButtonsDisabled] = useState(false)

  // console.log(isOnline)

  const handleSwitchChange = (checked) => {
    setButtonsDisabled(checked)
  }

  return (
    <div className="app">
      {/* <Blog /> */}

      {/* <Dashboard /> */}

      {/* <Post id="1" /> */}

      {/* <TestPost /> */}

      {/* <CustomButton text="Click" />
      <CustomButton text="Click" disabled />
      <CustomButton text="User 5" active /> */}

      {/* {buttons.map((button, index) => {
        return (
          <CustomButton
            key={button}
            text={button}
            active={index === activeButtonIndex}
            onClick={() => setActiveButtonIndex(index)}
            disabled
          />
        )
      })} */}

      {/* {buttons.map((button, index) => {
        return (
          <StyledButton
            key={button}
            text={button}
            active={index === activeButtonIndex}
            onClick={() => setActiveButtonIndex(index)}
            // style={{
            //   backgroundColor: 'red'
            // }}
            // disabled={index === 2}
          />
        )
      })} */}

      {buttons.map((button, index) => {
        return (
          <Button
            key={button}
            type={activeButtonIndex === index ? 'primary' : 'default'}
            // disabled={index === 3}
            onClick={() => setActiveButtonIndex(index)}
            disabled={buttonsDisabled}
          >
            {button}
          </Button>
        )
      })}

      <div>
        <Switch onChange={handleSwitchChange} />
      </div>

      {/* <Button>Click</Button>
      <Button type="primary">Click</Button>
      <Button type="dashed">Click</Button>
      <Button type="link">Click</Button>
      <Button type="text">Click</Button> */}
    </div>
  );
}

export default App;

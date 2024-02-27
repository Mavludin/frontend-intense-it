import { useState } from "react";
import { Button } from "../Button/Button";

/*
Создать компонент Counter, в котором есть состоние:
- count и incrementBy
- Вывести на экран count (0) и incrementBy(пропс)
- При клике на кнопку Increment by {incrementBy}, 
увеличить значение count на incrementBy
- Если проп incrementBy не передан, то по умолчанию = 1
*/

export const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>

      <div>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={resetCounter}>Reset counter</button>
      </div>

      {/* <Button /> */}
    </div>
  );
};

import { useState } from "react";

// Ошибка
// const [count, setCount] = useState(0);

const condition = false;

export const CounterBy = ({ incrementBy = 1 }) => {
  // Вызывать хук только так, свободно, и внутри компонента
  const [count, setCount] = useState(0);

  console.log('upadtes')
  // Ошибка

  //   if (condition) {
  //     const [count, setCount] = useState(0);
  //   }

  const handleIncrement = () => {
    // setCount(count + incrementBy);
    setCount(count + incrementBy);

    // Ошибка
    // const [count, setCount] = useState(0);
  };

  // Ошибка
  //   if (condition) {
  //     return null
  //   }

  //   const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment by {incrementBy}</button>
    </div>
  );
};

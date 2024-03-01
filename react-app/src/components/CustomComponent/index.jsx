export const CustomComponent = ({ setCount }) => {
  const handleClick = () => {
    setCount((c) => c + 1); // 0 + 1 === 1
  };

  return <button onClick={handleClick}>Click</button>;
};

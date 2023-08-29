import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>Click me</button>
      <p>{counter}</p>
    </>
  );
};

export default Counter;

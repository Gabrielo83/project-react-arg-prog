//useState
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const suma = () => setCount(count + 1);
  const resta = () => setCount(count - 1);

  return (
    <>
      <h1>Hook useState sin ser custom Hook</h1>
      <h2>{count}</h2>
      <button onClick={suma}>suma</button>
      <button onClick={resta}>resta</button>
    </>
  );
};

export default Counter;

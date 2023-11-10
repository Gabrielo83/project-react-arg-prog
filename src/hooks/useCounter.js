import { useState } from "react";

const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue);

  const suma = () => setCounter(counter + 1);
  const resta = () => setCounter(counter - 1);
  const limpiar = () => setCounter(initialValue);

  return { counter, suma, resta, limpiar };
};

export default useCounter;

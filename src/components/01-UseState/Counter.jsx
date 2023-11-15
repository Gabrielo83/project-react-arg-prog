import { useState } from "react";

import "./counter.css";

export const Counter = () => {
  //arrancamos de esta forma
  //   const [{ counter1, counter2 }, setCounter] = useState({
  //     counter1: 10,
  //     counter2: 20,
  //     counter3: 30,
  //     counter4: 40,
  //   });

  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  const { counter1, counter2, counter3, counter4 } = counter;

  //   const handleIncrement = () => setCounter(counter + 1);
  return (
    <>
      <h1>Contador 1 : {counter1}</h1>
      <h1>Contador 2 : {counter2}</h1>
      <h1>Contador 3 : {counter3}</h1>
      <h1>Contador 4 : {counter4}</h1>

      <button
        onClick={() =>
          setCounter({
            ...counter,
            counter1: counter1 + 1,
            counter2: counter2 + 1,
          })
        }
        className="btn btn-success"
      >
        Incrementar
      </button>
    </>
  );
};

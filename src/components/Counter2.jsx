import useCounter from "../hooks/useCounter";

const Counter2 = () => {
  const { counter, suma, resta, limpiar } = useCounter(0);

  return (
    <>
      <h1>Hook useState como customHook</h1>
      <h2>contador: {counter}</h2>
      <button onClick={suma}>suma</button>
      <button onClick={resta}>resta</button>
      <button onClick={limpiar}>limpiar</button>
    </>
  );
};

export default Counter2;

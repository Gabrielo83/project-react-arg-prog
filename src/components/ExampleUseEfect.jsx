import { useState, useEffect } from "react";

const ExampleUseEfect = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    setInterval(() => setContador(contador + 1), 2000);
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <h1>Ejemplo useEffect - El contador es: {contador}</h1>;
    </>
  );
};

export default ExampleUseEfect;

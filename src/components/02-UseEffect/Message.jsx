import { useEffect } from "react";
import "./forms.css";

export const Message = () => {
  useEffect(() => {
    //cuerpo del efecto
    console.log("componente montado");
    return () => {
      //fase de limpieza (cleanup)
      console.log("Componente Desmontado");
    };
  }, []);
  return (
    <>
      <h2>Mensaje Randoms</h2>
    </>
  );
};

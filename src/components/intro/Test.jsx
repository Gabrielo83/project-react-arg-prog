//TODO: 3) AGREGAMOS ESTILOS DESDE ARCHIVO

import estilo from "../styles/Test.module.css";

const Test = () => {
  return (
    <div className={estilo.container}>
      Estilo del contenedor
      <div style={{ color: "green", fontFamily: "cursive" }}>
        Estilo contenedor hijo
      </div>
      <div style={{ color: "yellow", fontFamily: "cursive", fontSize: "20px" }}>
        Estilo contenedor hijo2
      </div>
    </div>
  );
};

export default Test;

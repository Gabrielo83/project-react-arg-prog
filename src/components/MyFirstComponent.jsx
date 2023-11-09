//TODO: 1) GENERAMOS EL PRIMER COMPONENTE

const MyFirstComponent = () => {
  const nombre = "Ricardo";

  return <div>Bienvenido a mi pagina {nombre}</div>;
};

export default MyFirstComponent;

//TODO: 2) USANDO EL USESTATE
// import { useState } from "react";

// const MyFirstComponent = () => {
//   const nombre = "RODOLFO";
//   //   const value = 2;

//   const [value, setValue] = useState(0);

//   setTimeout(() => {
//     setValue(value + 1);
//   }, 2000);

//   return (
//     <>
//       Bienvenido a mi pagina {nombre} y el valor del contador es {value}
//     </>
//   );
// };

// export default MyFirstComponent;

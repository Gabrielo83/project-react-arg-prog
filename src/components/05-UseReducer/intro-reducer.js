const initialState = [
  {
    id: 1,
    descripcion: "Estudiar React",
    done: false,
  },
];

const reducer = (state = initialState, action) => {
  //logica necesaria para que el state cambie

  //se utiliza el Switch
  switch (action.type) {
    case "agregar":
      //logica para cambiar el estado (state)
      return [...state, action.payload];

    case "eliminar":
      //logica para cambiar el estado (state)
      return [...state, action.payload];

    case "actualizar":
      //logica para cambiar el estado (state)
      return [...state, action.payload];

    default:
      return state;
  }

  //Con el if
  //   if(action.type === "agregar"){

  //       return [...state, action.payload];
  //   }else if
};

const action = {
  type: "agregar",
  payload: tarea,
};

const tarea = {
  id: 1,
  descripcion: "Estudiar React",
  done: false,
};

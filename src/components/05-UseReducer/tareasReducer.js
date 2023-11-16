export const tareaReducer = (state = [], action) => {
  switch (action.type) {
    case "agregar":
      return [...state, action.payload];

    case "eliminar":
      return state.filter((tarea) => tarea.id !== action.payload);

    default:
      return state;
  }
};

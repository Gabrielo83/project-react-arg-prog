import { useEffect, useReducer } from "react";
import { tareaReducer } from "./tareasReducer";
import { useForm } from "../../hooks/useForm";

const init = () => {
  return JSON.parse(localStorage.getItem("tareas")) || [];
};

const initialState = [
  {
    id: new Date().getTime(),
    descripcion: "Practicar",
    done: false,
  },
];

export const TareaApp = () => {
  const [tareas, dispatch] = useReducer(tareaReducer, initialState, init);
  //   console.log(tareas.length);

  //reutilizamos codigo del formulario con useForm

  const [{ descripcion }, handleInputChange, reset] = useForm({
    descripcion: "",
  });

  ///-------PERSISTIR EN EL LOCALSTORAGE

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  //es necesaria la logica para el boton de AGREGAR (tarea)
  const handleSubmit = (e) => {
    e.preventDefault();

    //evitamos agregar tareas sin datos
    if (descripcion.trim().length <= 1) return;

    const nuevaTarea = {
      id: new Date().getTime(),
      descripcion: descripcion,
      done: false,
    };

    const action = {
      type: "agregar",
      payload: nuevaTarea,
    };

    dispatch(action);
    reset();
  };

  //es necesaria la logica para el boton de ELIMINAR (tarea)

  const handleDelete = (tareaId) => {
    // console.log(tareaId);

    const action = {
      type: "eliminar",
      payload: tareaId,
    };

    dispatch(action);
  };
  return (
    <>
      <h1>Tareas App: Cantidad de tareas pendientes {tareas.length}</h1>
      <hr />
      {/* CREAMOS LA LISTA DINAMICA */}
      <ol>
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.descripcion}
            <button
              onClick={() => handleDelete(tarea.id)}
              className="btn btn-danger"
            >
              Borrar
            </button>
          </li>
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nueva Tarea"
          name="descripcion"
          autoComplete="off"
          value={descripcion}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-success">
          Agregar Tarea
        </button>
      </form>
    </>
  );
};

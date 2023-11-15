import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

export const RickAndMorty = () => {
  const { counter, suma } = useCounter(1);
  const { loading, data } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  //   console.log(data);
  //   console.log(loading);
  return (
    <>
      <h1>RICK AND MORTY WITH CUSTOM HOOKS</h1>

      {loading ? (
        <div className="alert alert-info text-center">Cargando.......</div>
      ) : (
        <div>
          <img src={data.image} alt="" />
          <hr />
          <h1>Nombre: {data.name}</h1>
          <hr />

          <button className="btn btn-outline-success" onClick={suma}>
            Siguiente Personaje
          </button>
        </div>
      )}
    </>
  );
};

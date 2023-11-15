import { useForm } from "../../hooks/useForm";
import { Message } from "./Message";
import "./forms.css";

export const FormCustomHook = () => {
  const [values, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = values;

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="form-grup">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Ingrese Nombre"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-grup">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="email@mail.com"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-grup">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="*****"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-success">
          {" "}
          Guardar
        </button>
      </form>

      {name === "111" && <Message />}
    </>
  );
};

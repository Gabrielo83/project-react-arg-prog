import { useEffect, useState } from "react";
import "./forms.css";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { email, name } = formState;

  useEffect(() => {
    console.log("Montando efecto");
  }, []);

  useEffect(() => {
    console.log("Se agrega Nombre");
  }, [name]);

  useEffect(() => {
    console.log("Se agrega email");
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>Simple Form con UseEffect</h1>
      <hr />

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
    </>
  );
};

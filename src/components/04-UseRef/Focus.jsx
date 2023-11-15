// import "./Ref.css";

import { useRef } from "react";

export const Focus = () => {
  const inputRef = useRef();

  console.log(inputRef);

  const handleFocusClick = () => {
    // document.querySelector("input").focus();
    // document.querySelector("input").select();
    inputRef.current.select();
  };
  return (
    <>
      <h1>UseRef</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Nombre"
      />

      <button onClick={handleFocusClick} className="btn btn-primary mt-5">
        FOCUS
      </button>
    </>
  );
};

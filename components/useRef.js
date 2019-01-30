import React, { useState, useRef } from "react";

export function UseRefExample() {
  let [name, setName] = useState("Justin");

  let nameRef = useRef();

  const SubmitButton = () => {
    setName(nameRef.current.value);
  };

  return (
    <div className="App">
      <p>{name}</p>
      <div>
        <input ref={nameRef} type="text" />
        <button type="button" onClick={SubmitButton}>
          Submit
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
    console.log("you clicked the button!!!!!!");
  };
  return <button onClick={increment}>{count}Test</button>;
}

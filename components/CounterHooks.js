import React, { useState } from "react";
import { styles } from "../styles/styles";
import { useFetchJsonData } from "./useFetchJsonData";

export default function CounterHooks() {
  const [count, setCount] = useState(0); // useState returns an array [count, setCount] and is being destructured
  const result = useFetchJsonData();
  console.log("result: ", result.result);
  // let [name, priorities, location, school, work] = useFetchJsonData();
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  return (
    <div>
      <button style={styles.button} onClick={increment}>
        Increment
      </button>
      <button style={styles.button} onClick={reset}>
        Reset
      </button>
      <p>Count: {count}</p>
      {/* <p>{name}</p> */}
    </div>
  );
}

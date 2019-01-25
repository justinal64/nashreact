import React, { useState } from "react";
import { styles } from "../styles/styles";
export default function CounterHooks() {
  const [count, setCount] = useState(0); // useState returns and array and [count, setCount] is being destructured
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
    </div>
  );
}

import React from "react";
import { styles } from "../styles/styles";

export default class Counter extends React.Component {
  state = { count: 0 };
  render() {
    const increment = () => this.setState({ count: (this.state.count += 1) });
    const reset = () => this.setState({ count: (this.state.count = 0) });
    return (
      <div>
        <button style={styles.button} onClick={increment}>
          Increment
        </button>
        <button style={styles.button} onClick={reset}>
          Reset
        </button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

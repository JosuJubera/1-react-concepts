import React, { Component } from "react";
import Screen from "../Screen/Screen";
import Actions from "../Actions/Actions";

const styles = {
  container: {
    backgroundColor: "#c7f4da"
  }
}

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  add() {
    this.setState({ counter: this.state.counter + 1 })
  }

  subtract() {
    if (this.state.counter !== 0) {
      this.setState({ counter: this.state.counter - 1 })
    }
  }

  reset() {
    this.setState({ counter: 0 })
  }

  render() {
    return (
      <main style={styles.container}>
        <header>
          <h1> Counter ReactJS</h1>
        </header>

        <Screen value={this.state.counter} />

        <Actions value={this.state.counter} onSum={() => this.add()} onSubtract={() => this.subtract()} onReset={() => this.reset()} />

      </main>
    )
  };
}
export default Counter;
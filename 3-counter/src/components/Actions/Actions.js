import React, { Component } from "react";
import styles from './Actions.css';

class Actions extends Component {

  render() {
    return (
      <section className={styles.container}>
        <button className={styles.btn} onClick={this.props.onSum}>
          <span> Add </span>
        </button>

        <button disabled={this.props.value === 0} className={[styles.btn, this.props.value === 0 ? styles.disabled : ''].join(' ')} onClick={this.props.onSubtract}>
          <span> Subtract </span>
        </button>

        <button disabled={this.props.value === 0} className={[styles.btn, styles.reset, this.props.value === 0 ? styles.disabled : ''].join(' ')} onClick={this.props.onReset}>
          <span> Reset </span>
        </button>
      </section>
    );
  }
}
export default Actions;
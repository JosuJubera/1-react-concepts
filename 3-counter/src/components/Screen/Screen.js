import React, { Component } from 'react';

const styles = {
  screen: {
    backgroundColor: "#222",
    color: "#fafafa",
    padding: "2rem 1rem",
    fontSize: "2rem"
  }
}

class Screen extends Component {

  render() {
    return (
      <section style={styles.screen}>
        <p style={{ textAlign: "right" }}> {this.props.value || 0} </p>
      </section>
    );
  }
}
export default Screen;
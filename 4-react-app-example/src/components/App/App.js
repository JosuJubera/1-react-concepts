import React, { Component } from "react";
import TodoList from "../TodoList/TodoList";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  render() {
    return (
      <div>

        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Shopping list
          </Typography>
          </Toolbar>
        </AppBar>

        <TodoList items={this.state.items} />

        <form>
          <TextField
            label="Product name"
            value={this.state.text}
            onChange={this.handleChange}
          />

          <Button variant="fab" color="primary" aria-label="Add" onClick={this.handleSubmit}>
            <AddIcon />
          </Button>
        </form>

      </div >
    );
  }
}
export default App;
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class TodoList extends Component {

  render() {
    return (
      <List>
        {this.props.items.map(item => (
          <ListItem key={item.id}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    );
  }
}
export default TodoList;
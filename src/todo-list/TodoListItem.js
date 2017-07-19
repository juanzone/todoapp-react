import React, { Component } from 'react';

class TodoListItem extends Component {

  render() {
    return (
      <tr>
      <td>{this.props.tache}</td>
      <td>{this.props.creator}</td>
      <td> {this.props.date} </td>
      <td> <button className="btn btn-primary">Tache remplie</button> </td>
      </tr>
    );
  }
}

export default TodoListItem;

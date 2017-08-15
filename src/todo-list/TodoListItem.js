import React, { Component } from 'react';

class TodoListItem extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {flag : "j",
                  key : ""
    };
  }

  handleClick(e){
    this.props.removeTask(this.props.id)
  }

  render() {
    return (
      <tr>
      <td>{this.props.tache}</td>
      <td>{this.props.creator}</td>
      <td> {this.props.date} </td>
      <td><button className="btn btn-danger" onClick={this.handleClick}>Supprimer</button> </td>
      </tr>
    );
  }
}

export default TodoListItem;

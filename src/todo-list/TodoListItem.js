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
    this.setState({flag : true, id : this.props.id}, function(){
      this.props.checker(this.state.flag, this.state.id);
    });
  }

  render() {
    return (
      <tr>
      <td>{this.props.tache}</td>
      <td>{this.props.creator}</td>
      <td> {this.props.date} </td>
      <td><button className="btn btn-primary" onClick={this.handleClick}>Tache remplie</button> </td>
      </tr>
    );
  }
}

export default TodoListItem;

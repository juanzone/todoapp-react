import React, { Component } from 'react';
import AddBar from '../add-bar/AddBar';

class TodoList extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      list : [
        {
          task : "ranger chambre"
        },
        {
          task : "ranger jardin"
        },
        {
          task : "ranger cuisine"
        },
      ]
    };
  }

  getData(){
    let data = this.state;
    return data;
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <td> Task </td>
                <td> Creator </td>
                <td> Date </td>
                <td> Done </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {this.state.task} </td>
                <td> {this.state.creator}</td>
                <td> {this.state.date.getDate()} </td>
                <td> <input type="checkbox" /> </td>
              </tr>
            </tbody>
          </table>
          <AddBar />
        </div>
      </div>
    );
  }
}

export default TodoList;

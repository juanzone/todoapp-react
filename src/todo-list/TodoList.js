import React, { Component } from 'react';
import AddBar from '../add-bar/AddBar';
import TodoListItem from './TodoListItem';

class TodoList extends Component {

  constructor(props){
    super(props);

    this.state = {
      taskList : [
        {
          name : 'Ranger chambre',
          creator: 'Juan Zone'
        },
        {
          name : 'Ranger Grenier',
          creator: 'Philippe Zone'
        }
      ]
    };
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
              {
                this.state.taskList.map(function(taske, i){
                  console.log(taske);
                  return <TodoListItem key={i} tache={taske.name} creator={taske.creator} />
                })
              }
            </tbody>
          </table>
          <AddBar />
        </div>
      </div>
    );
  }
}

export default TodoList;

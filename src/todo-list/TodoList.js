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
          creator: 'Juan Zone',
          date : new Date(2017,11,17).toDateString()
        },
        {
          name : 'Ranger Grenier',
          creator: 'Philippe Zone',
          date : new Date(2017,1,17).toDateString()
        }
      ]
    };
    this.getTask = this.getTask.bind(this);
  }

  getTask(juan){
    let newTaskList = this.state.taskList;
    newTaskList.push(juan);
    console.log(newTaskList);
    this.setState({taskList : newTaskList});
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
                  return <TodoListItem key={i} tache={taske.name} creator={taske.creator} date={taske.date} />
                })
              }
            </tbody>
          </table>
          <AddBar newtask={this.getTask} />
        </div>
      </div>
    );
  }
}

export default TodoList;

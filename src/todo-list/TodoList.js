import React, { Component } from 'react';
import AddBar from '../add-bar/AddBar';
import TodoListItem from './TodoListItem';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.getCheck = this.getCheck.bind(this);
    this.getTask = this.getTask.bind(this);

    this.state = {
      taskList : [
        {
          name : 'Ranger chambre',
          creator: 'Juan Zone',
          date : new Date(2017,11,17).toDateString(),
          check : false
        },
        {
          name : 'Ranger Grenier',
          creator: 'Philippe Zone',
          date : new Date(2017,1,17).toDateString(),
          check : false,
        }
      ]
    };
  }

  getTask(newtask){
    let newTaskList = this.state.taskList;
    newTaskList.push(newtask);
    console.log(newTaskList);
    this.setState({taskList : newTaskList});
  }

  getCheck(checker, id){
    let newTaskList = this.state.taskList;
    newTaskList[id].check = checker;
    this.setState({taskList : newTaskList}, function(){
      console.log(this.state.taskList[id].check)
    })
  }

  render() {

    return (
        <div className="col-xs-6">
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
                this.state.taskList.map( (taske, i) => {
                  return <TodoListItem checker={this.getCheck} key={i} id={i} tache={taske.name} creator={taske.creator} date={taske.date} check={taske.check} />
                })
              }
            </tbody>
          </table>
          <AddBar newtask={this.getTask} />
        </div>
    );
  }
}

export default TodoList;

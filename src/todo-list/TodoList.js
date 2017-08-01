import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBar from '../add-bar/AddBar';
import TodoListItem from './TodoListItem';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.getCheck = this.getCheck.bind(this);
    this.getTask = this.getTask.bind(this);

    // this.state = {
    //   taskList : [
    //     {
    //       name : 'Ranger chambre',
    //       creator: 'Juan Zone',
    //       date : new Date(2017,11,17).toDateString(),
    //       check : false
    //     },
    //     {
    //       name : 'Ranger Grenier',
    //       creator: 'Philippe Zone',
    //       date : new Date(2017,1,17).toDateString(),
    //       check : false,
    //     }
    //   ]
    // };
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
      this.state.taskList.map((task, i) => {
          if(task.check === true){
            let newTaskList = this.state.taskList;
            newTaskList.splice(i, 1);
            this.setState({taskList : newTaskList});
          }
      })
    });
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
                this.props.taskList.map( (taske, i) =>
                  <TodoListItem checker={this.getCheck} key={i} id={i} tache={taske.name} creator={taske.creator} date={taske.date} check={taske.check} />
                )
              }
            </tbody>
          </table>
          <AddBar newtask={this.getTask} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    taskList : state.tasks
  }
}

export default connect(mapStateToProps)(TodoList);

import React, { Component } from 'react';
import { connect } from 'react-redux';
//import AddBar from '../add-bar/AddBar';
import TodoListItem from './TodoListItem';
import { getTasks, removeTask, addTask } from '../actions/index';
import { bindActionCreators} from 'redux';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './todoList.css';

class TodoList extends Component {

  constructor(props){
    super(props);
    this.removeTask = this.removeTask.bind(this);
  }

  componentWillMount(){
    this.props.getTasks();
  }

  removeTask(id){
    this.props.removeTask(id)
  }

  renderTask(){
    const tasklist = this.props.tasklist;
    if(tasklist){
      return this.props.tasklist.map( (taske, i) => {
        return <TodoListItem key={i} id={taske._id} tache={taske.task} creator={taske.author} date={taske.date} check={taske.completed} removeTask={this.removeTask} />
      })
    }
    // else {
    //   return <h1> Pas de choses à faire! </h1>
    // }
  }

  render() {
    return(
      <div className="row">
      <div className="col-xs-12">
        <table className="table table-striped">
          <thead>
            <tr>
              <th className="juan"> Task </th>
              <th> Creator </th>
              <th> Date </th>
              <th> Done </th>
            </tr>
          </thead>
          <ReactCSSTransitionGroup
          component="tbody"
          transitionName="taskAnimation"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={700}>
        {this.renderTask()}
        </ReactCSSTransitionGroup>
      </table>
    </div>
    </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    tasklist : state.tasks
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({getTasks, addTask, removeTask}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

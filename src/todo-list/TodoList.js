import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddBar from '../add-bar/AddBar';
import TodoListItem from './TodoListItem';
import { getTasks } from '../actions/index';
import { bindActionCreators} from 'redux'

class TodoList extends Component {


  componentWillMount(){
    this.props.getTasks();
  }

  renderTask(){
    const tasklist = this.props.tasklist;
    if(tasklist){
      return (
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
                  this.props.tasklist.map( (taske, i) =>
                    <TodoListItem checker={this.getCheck} onClick={() => this.props.selectTask(taske)} key={i} id={i} tache={taske.title} creator={taske.userId} date={taske.id} check={taske.completed} />
                  )
                }
              </tbody>
            </table>
          </div>
      );
    }else{
      return <h1> Pas de choses à faire! </h1>
    }
  }

  render() {
    return(
      <div className="row">
        {this.renderTask()}
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
  return bindActionCreators({getTasks}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

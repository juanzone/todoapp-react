import React, { Component } from 'react';
import './AddBar.css';

class Addbar extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {newTask : ""};
  }


  handleChange(e){
    let task = {};
    task = {
      name : e.target.value,
      creator : "Juan Zone",
      date : new Date().toDateString()
    };

    this.setState({newTask : task });
  }

  handleClick(e) {
    this.props.newtask(this.state.newTask);
    console.log(this.refs.inputTest.value)
    this.refs.inputTest.value = "";
    console.log(this.refs.inputTest.value)

  }

  render() {
    return (
      <div className="row equal">
        <div className="col-xs-2">
          <form className="inline-form">
            <label>
              Task:
            </label>
            <input className="form-control" onChange={this.handleChange} ref="inputTest" type="text" />
          </form>
        </div>
        <div className="col-xs-3">
          <button className="btn btn-primary" onClick={this.handleClick}> Ajouter </button>
        </div>
      </div>
    );
  }
}

export default Addbar;

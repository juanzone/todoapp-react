import React, { Component } from 'react';
import './AddBar.css';

class Addbar extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({name : e.target.value})
  }

  render() {
    return (
      <div className="row equal">
        <div className="col-xs-6">
          <form className="inline-form">
            <label>
              Task:
            </label>
            <input onChange={this.handleChange} className="form-control" type="text" />
          </form>
        </div>
        <div className="col-xs-3">
          <button className="btn btn-primary"> Ajouter </button>
        </div>
        <p> {this.state.name} </p>
      </div>
    );
  }
}

export default Addbar;

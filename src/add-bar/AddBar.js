import React, { Component } from 'react';
import './AddBar.css';

class Addbar extends Component {

  render() {
    return (
      <div className="row equal">
        <div className="col-xs-6">
          <form className="inline-form">
            <label>
              Task:
            </label>
            <input className="form-control" type="text" />
          </form>
        </div>
        <div className="col-xs-3">
          <button className="btn btn-primary"> Ajouter </button>
        </div>
      </div>
    );
  }
}

export default Addbar;

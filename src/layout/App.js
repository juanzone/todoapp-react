import React, { Component } from 'react';
import Header from './Header';
import TodoList from '../todo-list/TodoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="col-xs-12">
            <h1 className="text-left"> Ma todo liste </h1>
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

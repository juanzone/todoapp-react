import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="title-header">Welcome to My First React App</h2>
        </div>
      </div>
    );
  }
}

export default Header;

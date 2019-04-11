import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Category from './components/Category'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Category />
      </div>
    );
  }
}

export default App;

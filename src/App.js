import React, { Component } from 'react';

import './App.css';

import Cart from './components/cart';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <h1 class="App-title">React-Redux Grocery Cart</h1>
        <p className="App-intro">
          <Cart />
        </p>
      </div>
    );
  }
}

export default App;

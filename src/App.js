import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './products';

class App extends Component {
  render() {
    var courses = [
      { name: 'airpods' , price: 55000},
      { name: 'samsung u-level', price: 15000},
      { name: 'bose', price: 65000},
      { name:  'parrot', price: 35000},
      { name: 'pixel buds', price: 56000},
      { name: 'zealot', price: 16000}

    ];
    return (
      <div className="App">
        <div className="logo-background">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <header className="App-header">


          <Products items = {courses} />

        </header>
      </div>
    );
  }
}

export default App;

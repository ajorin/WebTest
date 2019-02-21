import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleMain from './ArticleMain.js'
import Imports from './Imports.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Imports />
        <h1>Article Ranker</h1>
        <ArticleMain text="hello" />
        <button className="btn" type="button">button</button>
      </div>
    );
  }
}

export default App;

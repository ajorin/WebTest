import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleMain from './ArticleMain.js'
import Imports from './Imports.js'
import Instructions from './Instructions.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showArticleBox: false
    }
  }

  showArticle() {
    this.setState({showArticleBox: true});
  }

  render() {
    return (
      <div className="App">
        <Imports />
        <h1>Article Ranker</h1>
        <Instructions />
        <ArticleMain text="hello" show={this.state.showArticleBox} />
        <button className="btn" type="button" onClick={this.showArticle.bind(this)} >button</button>
      </div>
    );
  }
}

export default App;

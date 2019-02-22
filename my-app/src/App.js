import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleMain from './ArticleMain.js'
import Imports from './Imports.js'
import Instructions from './Instructions.js'
import axios from 'axios'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showArticleBox: false,
      articles: []
    }
  }

   componentDidMount() {

   }

  showArticle() {
    this.setState({showArticleBox: true});
    axios({
      method: 'get',
      url: '/app/getArticle',
      data: 'Insert random number'
    }).then(function(response) {
      //store fetched article data
    }).catch(function(err) {
      console.log(err); //Do something with err
    });
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

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ArticleMain from './ArticleMain.js'
import Imports from './Imports.js'
import Instructions from './Instructions.js'
import axios from 'axios'
import article1 from './data/article-1.json';
import article2 from './data/article-2.json';
import article3 from './data/article-3.json';
import article4 from './data/article-4.json';
import article5 from './data/article-5.json';
import './button.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showArticleBox: false,
      artcileSelected: '',
      articles: [article1, article2, article3, article4, article5],
      randomVal: 5
    }
    this.generateRandomNumber = this.generateRandomNumber.bind(this);
  }


  readArticle() {
    let randomNumber = this.generateRandomNumber(1, this.state.articles.length -1);
    console.log("randomNumber:" + randomNumber);
    let article = JSON.parse(JSON.stringify(this.state.articles[randomNumber]));
    this.removeArticle(randomNumber);
    this.setState({articleSelected: article});
  }

  generateRandomNumber(minimum, maxamimum) {
    let min = Math.ceil(minimum);
    let max = Math.floor(maxamimum)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  removeArticle(i) {
    this.state.articles.splice(i, 1);
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
      //console.log(err); //Do something with err
    });
    //Now Stubbing the Get Request
    //let article = JSON.parse(JSON.stringify(article5));
    //console.log(article);
    //console.log(this.state.articles);
    //this.setState({articleSelected: article});
    this.readArticle();
  }

  render() {
    return (
      <div className="App">
        <h1>Article Ranker</h1>
        <Imports />
        <Instructions />
        <ArticleMain article={this.state.articleSelected} show={this.state.showArticleBox}  />
        <button className="button" type="button" onClick={this.showArticle.bind(this)} >button</button>
      </div>
    );
  }
}

export default App;

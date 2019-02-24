import React, { Component } from 'react';
import axios from 'axios'

class ArticleRanker extends Component { 
  constructor(props) {
  	super(props);
  	this.state = {
  	  pendingArticles: ["article1", "article2", "article3"],
  	  chosenArticles: [],
  	  firstArticleSelected: '',
  	  secondArticleSelected: '',
  	  thirdArticleSelected: ''
  	}
  	this.validateRankings = this.validateRankings.bind(this);
  	this.setFirstArticleSelected = this.setFirstArticleSelected.bind(this);
  	this.setSecondArticleSelected = this.setSecondArticleSelected.bind(this);
  	this.setThirdArticleSelected = this.setThirdArticleSelected.bind(this);
  }

  setFirstArticleSelected(event) {
  	console.log(event.target.value);
  	this.state.chosenArticles.push(event.target.value);
  	this.setState({firstArticleSelected: event.target.value});
  	this.validateRankings();
  }

  setSecondArticleSelected(event) {
  	console.log("first: " +this.state.firstArticleSelected)
  	console.log(event.target.value);
  	this.state.chosenArticles.push(event.target.value);
  	this.setState({secondArticleSelected: event.target.value});
  	this.validateRankings();
  }

  setThirdArticleSelected(event) {
  	console.log(event.target.value);
  	this.state.chosenArticles.push(event.target.value);
  	this.setState({thirdArticleSelected: event.target.value});
  	this.validateRankings();
  }

  renderRankingFirst() {
  	return(
  	  <div className="card">
  	    <div className="card-body" onChange={event => this.setFirstArticleSelected(event)}>
  	      <h3>Which Article would you rank first?</h3>
  	      <div className="form-group">
  	        <div>
  	          <label for="option1">Article 1</label>
  	          <input type="radio" value="article1" name="selectionOne" />
  	        </div>
  	        <div className="form-group">
  	          <label for="option1">Article 2</label>
  	          <input type="radio" value="article2" name="selectionOne"/>
  	        </div>
  	        <div className="form-group">
  	          <label for="option1">Article 3</label>
  	          <input type="radio" value="article3" name="selectionOne" />
  	        </div>
  	      </div>
  	    </div>
  	  </div>
  	)
  }

  renderRankingSecond() {
  	return(
  	  <div className="card">
  	    <div className="card-body" onChange={event => this.setSecondArticleSelected(event)}>
  	      <h3>Which Article would you rank second?</h3>
  	      <div className="form-group">
  	        <label for="option1">Article 1</label>
  	        <input type="radio" value="article1" name="selectionTwo" />
  	      </div>
  	        <div className="form-group">
  	        <label for="option1">Article 2</label>
  	        <input type="radio" value="article2" name="selectionTwo"/>
  	      </div>
  	      <div className="form-group">
  	        <label for="option1">Article 3</label>
  	        <input type="radio" value="article3" name="selectionTwo" />
  	      </div>
  	    </div>
  	  </div>
  	)
  }

  renderRankingThird() {
  	return(
  	  <div className="card">
  	    <div className="card-body" onChange={event => this.setThirdArticleSelected(event)}>
  	      <h3>Which Article would you rank third?</h3>
  	      <div className="form-group">
  	        <label for="option1">Article 1</label>
  	        <input type="radio" value="article1" name="selectionThird" />
  	      </div>
  	        <div className="form-group">
  	        <label for="option1">Article 2</label>
  	        <input type="radio" value="article2" name="selectionThird"/>
  	      </div>
  	      <div className="form-group">
  	        <label for="option1">Article 3</label>
  	        <input type="radio" value="article3" name="selectionThird" />
  	      </div>
  	    </div>
  	  </div>
  	);
  }

  submitRankings() {
  	this.validateRankings();
  	if (this.state.rankingsValid) {
  	  let rankingObject = {
  	    first: this.state.firstArticleSelected,
  	    second: this.state.secondArticleSelected,
  	    third: this.state.thirdArticleSelected
  	  }
  	  axios({
  	    method: 'post',
  	    url: '/ArticleRanker/rankings',
  	    data: rankingObject
  	  }).then(function(response) {
  	    //On Success message here
  	  }).catch(function(error) {
  	    //error message here
  	  })
  	  } else {
  	  	console.log("rankings not valid");
  	  }
  }

  validateRankings() {
  	if (this.state.firstArticleSelected === this.state.secondArticleSelected) {
	  this.setState({rankingsValid: false});
	} else if (this.state.firstArticleSelected === this.state.thirdArticleSelected) {
	  this.setState({rankingsValid: false});
	} else  if (this.state.secondArticleSelected === this.state.thirdArticleSelected) {
	  this.setState({rankingsValid: false});
	} else {
	  this.setState({rankingsValid: true});
	}
  }


  render() {
  	if (!this.props.show) {
  	  return null;
  	}

  	return(
  	  <div>
  	    {this.renderRankingFirst()}
  	    {this.renderRankingSecond()}
  	    {this.renderRankingThird()}
  	    <button className="btn" onClick={this.submitRankings.bind(this)}>Submit Rankings</button>
  	  </div>
  	);
  }
}

export default ArticleRanker;
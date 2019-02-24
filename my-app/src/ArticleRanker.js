import React, { Component } from 'react';

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
  }

  setFirstArticleSelected(event) {
  	console.log(event.target.value);
  	this.state.chosenArticles.push(event.target.value);
  	this.setState({firstArticleSelected: event.target.value});
  }

  setSecondArticleSelected(event) {
  	console.log("first: " +this.state.firstArticleSelected)
  	console.log(event.target.value);
  	this.state.chosenArticles.push(event.target.value);
  	this.setState({secondArticleSelected: event.target.value});
  }

  setThirdArticleSelected(event) {
  	console.log(event.target.value);
  	this.state.chosenArticles.push(event.target.value);
  	this.setState({thirdArticleSelected: event.target.value})
  }

  renderRankingFirst() {
  	return(
  	  <div className="card">
  	    <div className="card-body" onChange={event => this.setFirstArticleSelected(event)}>
  	      <h3>Which Article would you rank first?</h3>
  	      <div className="form-group">
  	        <div>
  	          <label for="option1">Article 1</label>
  	          <input type="radio" value={this.state.pendingArticles[0]} name="article" />
  	        </div>
  	        <div className="form-group">
  	          <label for="option1">Article 2</label>
  	          <input type="radio" value={this.state.pendingArticles[1]} name="article"/>
  	        </div>
  	        <div className="form-group">
  	          <label for="option1">Article 3</label>
  	          <input type="radio" value={this.state.pendingArticles[2]} name="article" />
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
  	        <input type="radio" value="article1" name="article" />
  	      </div>
  	        <div className="form-group">
  	        <label for="option1">Article 2</label>
  	        <input type="radio" value="article2" name="article"/>
  	      </div>
  	      <div className="form-group">
  	        <label for="option1">Article 3</label>
  	        <input type="radio" value="article3" name="article" />
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
  	        <input type="radio" value="article1" name="article" />
  	      </div>
  	        <div className="form-group">
  	        <label for="option1">Article 2</label>
  	        <input type="radio" value="article2" name="article"/>
  	      </div>
  	      <div className="form-group">
  	        <label for="option1">Article 3</label>
  	        <input type="radio" value="article3" name="article" />
  	      </div>
  	    </div>
  	  </div>
  	);
  }

  submitRankings() {
  	//Call Validation method here
  	let rankingObject = {
  	  first: this.state.firstArticleSelected,
  	  second: this.state.secondArticleSelected,
  	  third: this.state.thirdArticleSelected
  	} 
   	//axios post request if valid
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
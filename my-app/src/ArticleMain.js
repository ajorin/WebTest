import React, { Component } from 'react';
import axios from 'axios'

class ArticleMain extends Component {
  constructor(props) {
  	super(props);
  }

  readArticle() {
    //get article
  }

  componentDidMount() {
    //get request goes here
  }

  render() {
    if (this.props.show === false) {
      return null
    }

  	return(
  	  <div>
  	  	<p>{this.props.text}</p>
  	  </div>
  	)
  }
}

export default ArticleMain 
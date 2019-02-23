import React, { Component } from 'react';
import axios from 'axios'

class ArticleMain extends Component {
  constructor(props) {
  	super(props);
  }

  readArticle() {
    if (this.props.artcle === '' || typeof this.props.article === "undefined") {
    } else {
        console.log(this.props.article.body);
        console.log("length: " + this.props.article.length);
    }
    let articleData = this.props.article;
    console.log(articleData);
  }

  createParagraph(text) {
    return (<p>{text}</p>)
  }

  createImage(model) {
    return (<img src={model.url} alt={model.altText} height={model.height} width={model.width} />);
  }

  createList(items) {
    return (
      <ul> 
        {this.createListItems(items)}
      </ul>
    )
  }

  createListItems(items) {
    let listItems = [];
    for (let i=0; i< items.length; i++) {
      listItems.push(<li>{items[i]}</li>);
    }
    return listItems
  }

  createHeading(text) {
    console.log("Heading: " + text)
    return (<h2>{text}</h2>);
  }


  renderArticle() {
    let article = this.props.article;
    let articleComponents = [];
    for (let i=0; i < article.body.length; i++) {
      console.log(article.body[i].type);
      if (article.body[i].type === "heading") {
        articleComponents.push(this.createHeading(article.body[i].model.text));
      }
        if (article.body[i].type === "image") {
        articleComponents.push(this.createImage(article.body[i].model));
      }
      if (article.body[i].type === "paragraph") {
        articleComponents.push(this.createParagraph(article.body[i].model.text));
      }
      if (article.body[i].type === "list") {
        articleComponents.push(this.createList(article.body[i].model.items));
      }
    }
    return (articleComponents);
  }

  renderArticleTitle() {
    console.log("title:" + this.props.article.title);
    return (
      <h1>{this.props.article.title}</h1>
    )
  }

  render() {
    console.log(this.props.show);
    console.log(this.props.article);
    if (this.props.show === false) {
      return null
    }

  	return(
  	  <div>
      {this.renderArticleTitle()}
      {this.renderArticle()}
  	  </div>
  	)
  }
}

export default ArticleMain 
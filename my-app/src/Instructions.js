import React, { Component } from 'react';
import Imports from './Imports.js'

class Instructions extends Component {
  constructor(props) {
  	super(props);
  }


  render() {
  	return(
  	  <div>
  	    <Imports />
  	    <p>Instructions</p>
  	  </div>
  	);
  }
}

export default Instructions;
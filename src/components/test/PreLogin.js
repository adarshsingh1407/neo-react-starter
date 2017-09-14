import React, { Component } from 'react';
import './PreLogin.css';

class PreLogin extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render(){
    return(
      <div className="App-header">
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} className="App-logo" alt="logo" />
        <h2>{this.props.appName} - {this.props.env.toUpperCase()}</h2>
      </div>
    );
  }
}

export default PreLogin;

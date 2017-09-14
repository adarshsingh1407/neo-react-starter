import React, { Component } from 'react';
import ComponentA from './ComponentA';

class Home extends Component {
  render(){
    return(
      <div>
        <p>Home</p>
        <ComponentA />
      </div>
    );
  }
}

export default Home;

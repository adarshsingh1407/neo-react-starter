import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Test.css';// Tell Webpack that ComponentB.js uses these styles

class ComponentB extends Component {
  render(){
    return(
      <div>
        <div className="button">
          <Button bsStyle="danger">Component B</Button>
        </div>
      </div>
    );
  }
}

export default ComponentB;

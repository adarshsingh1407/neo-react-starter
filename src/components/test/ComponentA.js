import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './Test.css';// Tell Webpack that ComponentA.js uses these styles

class ComponentA extends Component {
  render(){
    return(
      <div>
        <div className="button">
          <Button bsStyle="primary">Component A</Button>
        </div>
      </div>
    );
  }
}

export default ComponentA;

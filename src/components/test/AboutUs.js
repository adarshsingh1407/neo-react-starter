import React, {Component} from 'react';
import ComponentB from './ComponentB';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <p>About Us</p>
        <ComponentB/>
      </div>
    );
  }
}

export default AboutUs;

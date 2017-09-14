import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/test/Home';
import AboutUs from './components/test/AboutUs';
import PreLogin from './components/test/PreLogin';
import SeoHeader from './components/seo/SeoHeader';
import getEnv from './utils/Env';
import Constants from './utils/Constants';

class App extends Component {
  render() {
    const ENV = getEnv(process.env.NODE_ENV);
    return (
      <div className="App">
        <SeoHeader />
        <PreLogin appName={Constants.appName} env={ENV.name}/>
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <hr />
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={AboutUs}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

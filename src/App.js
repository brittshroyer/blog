import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Link, IndexLink} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">



        <p className="navbar">
          <ul className="header">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/Listen" activeClassName="active">Listen</Link></li>
            <li><Link to="/Watch" activeClassName="active">Watch</Link></li>
          </ul>
        </p>
        

      </div>
    );
  }
}

export default App;

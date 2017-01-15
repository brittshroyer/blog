import React, {Component} from 'react';

import {Link, IndexLink} from 'react-router';

class Nav extends Component {
  render(){
    return(
      <div>
        <p className="navbar">
          <ul className="header">
            <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
            <li><Link to="/Listen" activeClassName="active">Listen</Link></li>
            <li><Link to="/Watch" activeClassName="active">Watch</Link></li>
          </ul>
        </p>
      </div>
    )
  }
}

export default Nav;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import dotenv from 'dotenv';

dotenv.config( { silent: true } );

import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Home from './components/Home.js';
import Listen from './components/Listen.js';
import Watch from './components/Watch.js';

ReactDOM.render(
  (
  <Router history={hashHistory}>
    <Route path="/" component={App} >    
     <IndexRoute component={Home}/>
     <Route path="/listen" component={Listen}/>
     <Route path="/watch" component={Watch}/>
   </Route>

  </Router>
),
   document.getElementById('root')
);

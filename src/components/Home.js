import React, {Component} from 'react';
import  {firebase, firebaseListToArray} from '../utils/firebase.js';

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: []
    }
  }
  render(){
    return(
      <div>
        <h2>Welcome</h2>
      </div>
    );
  }
}

export default Home;

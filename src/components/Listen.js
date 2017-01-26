import React, {Component} from 'react';
import  {firebase, firebaseListToArray} from '../utils/firebase';

class Listen extends Component{
  constructor(props){
    super(props);

    this.state = {
      songs: []
    }
  }

  componentWillMount(){
    firebase.database()
    .ref('/songs')
    .orderByChild('/songs')
    .on('value', data => {
      const results = firebaseListToArray(data.val());

      this.setState({
        songs: results
      });
    });
  }
  render(){
    return(
      <ul className="songs">
        {songs}
      </ul>
    );
  }
}

export default Listen;

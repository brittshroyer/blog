import React, {Component} from 'react';
import SearchBar from './SearchBar';
import MainVideo from './MainVideo';
import VideoQue from './VideoQue';
import axios from 'axios';

class Watch extends Component{
  constructor(){
    super();

    this.state = {
      videos: [],
      mainVideo: {}
    }
  }
  searchEntered(e){
    //how do we get e.target.value(is that javascript?)
    const term = e.target.value;
    console.log('search term:', term);

    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        q: term,
        type: 'video'
      }
    })

    .then(function (response) {
      console.log('YouTube data:', response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }


  render(){
    return(
      <div>
        <SearchBar searchEntered={this.searchEntered.bind(this)}/>
        <MainVideo />
        <VideoQue />
        <div className="antenna"></div>
        <div className="top"></div>
        <div className="tv"></div>
      </div>
    );
  }
}

export default Watch;

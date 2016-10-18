//Pckgs
import React, { Component } from 'react';
import YTSearch from "youtube-api-search";
import debounce from "lodash.debounce";

//Misc. 
import './App.css';
import BOTS from "../key";

//Components
import SearchBar from "./search_bar.jsx";
import VideoList from "./video_list.jsx";
import VideoDetail from "./video_detail.jsx";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch.bind(this)
    this.videoSearch("music")
  }
  videoSearch(term){
    YTSearch({key: BOTS, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })})
  }
  render() {
   return ( 
    <div className="app">
      <SearchBar onSearchTermChange={debounce(term => this.videoSearch(term), 300)}/>
      <VideoDetail video={this.state.selectedVideo}/>
      <VideoList 
      videos={this.state.videos}
      onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}
      />
    </div>
    );
  }
}

export default App;

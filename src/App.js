import React, { Component } from 'react';
import './App.css';

import SearchBar from './componentes/SearchBar'
import VideoList from './componentes/VideoList'
import VideoPlayer from './componentes/VideoPlayer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoList />
        <VideoPlayer />
      </div>
    );
  }
}

export default App;

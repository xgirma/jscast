import React, { Component } from 'react';
import Player from '../containers/Player';
import Playlist from '../containers/Playlist';
import Playing from '../containers/Playing';
import Toggle from '../containers/Toggle';
import '../style/Channel.css';

class Channel extends Component {
  
  render() {
    return (
      <div className="container-Channel">
        <Player />
        <Toggle />
        <Playlist />
        <Playing />
      </div>
    );
  }
}

export default Channel;

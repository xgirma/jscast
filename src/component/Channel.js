import React from 'react';
import Toggle from '../containers/Toggle';
import Player from '../containers/Player';
import Playing from '../containers/Playing';
import Playlist from '../containers/Playlist';
import '../style/Channel.css';

const Channel = () => (
  <div className="Channel">
    <Player />
    <Playing />
    <Toggle />
    <Playlist />
  </div>
);


export default Channel;

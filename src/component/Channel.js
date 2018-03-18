import React from 'react';
import Player from '../containers/Player';
import Playlist from '../containers/Playlist';
import Playing from '../containers/Playing';
import Toggle from '../containers/Toggle';
import '../style/Channel.css';

const Channel = () => (
  <div className="Channel">
    <Player />
    <Toggle />
    <Playlist />
    <Playing />
  </div>
);


export default Channel;

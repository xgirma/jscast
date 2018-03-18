import React from 'react';
import Toggle from '../containers/Toggle';
import Player from '../containers/Player';
import Playing from '../containers/Playing';
import Playlist from '../containers/Playlist';
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

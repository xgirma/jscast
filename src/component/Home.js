import React from 'react';
import Player from '../containers/Player';
import Playlist from '../containers/Playlist';
import Playing from '../containers/Playing';
import Toggle from '../containers/Toggle';
import '../style/Home.css';

const Home = () => (
  <div className="Home">
    <Player />
    <Toggle />
    <Playlist />
    <Playing />
  </div>
);

export default Home;

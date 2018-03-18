import React from 'react';
import Player from '../containers/Player';
import Toggle from '../containers/Toggle';
import Playing from '../containers/Playing';
import Playlist from '../containers/Playlist';
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

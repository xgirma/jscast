import React from 'react';
import Player from '../containers/Player';
import Playlist from '../containers/Playlist';
import Playing from '../containers/Playing';
import '../style/Home.css';

const Home = () => (
  <div className="Home">
    <Player />
    <Playlist />
    <Playing />
  </div>
);

export default Home;

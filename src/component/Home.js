import React from 'react';
import Player from '../containers/Player';
import Playlist from '../containers/Playlist';
import '../style/Home.css';

const Home = () => (
  <div className="Home">
    <Player />
    <Playlist />
  </div>
);

export default Home;

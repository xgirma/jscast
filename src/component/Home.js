import React from 'react';
import Player from '../containers/Player';
import Toggle from '../containers/Toggle';
import Playing from '../containers/Playing';
import Playlist from '../containers/Playlist';
import '../style/Home.css';

const Home = () => (
  <div className="Home">
    <Player className="Home-player"/>
    <Playing className="Home-playing"/>
    <Toggle className="Home-toggle"/>
    <Playlist className="Home-playlist"/>
  </div>
);

export default Home;

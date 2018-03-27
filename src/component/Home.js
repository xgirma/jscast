import React from 'react';
import Player from '../containers/Player';
import Toggle from '../containers/Toggle';
import Playing from '../containers/Playing';
import Playlist from '../containers/Playlist';
import Footer from '../containers/Footer';
import '../style/Home.css';

const Home = () => (
  <div className="Home">
    <Player className="Home-player"/>
    <Playing className="Home-playing"/>
    <Toggle className="Home-toggle"/>
    <Playlist className="Home-playlist"/>
    <Footer className="Home-footer"/>
  </div>
);

export default Home;

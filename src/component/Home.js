import React, { Component } from 'react';
import PlayerContainer from './PlayerContainer';
import Playlist from './Playlist';
import { getRecent, getPopular } from '../api/api';
import { defPlaylist } from '../utils/default';
import '../style/Home.css';

class Home extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'Home';

  state = {
    error: null,
    isLoaded: false,
    playlist: defPlaylist,
    autoPlay: false,
  };

  componentDidMount() {
    this.setState({ isLoaded: true });
    this.fetchRecent();
  }

  async fetchRecent() {
    try {
      const { data } = await getRecent();
      this.setState({
        playlist: data,
      });
    } catch (err) {
      this.setState({
        error: err,
        isLoaded: false,
      });
    }
  }

  async fetchPopular() {
    try {
      const { data } = await getPopular();
      this.setState({
        playlist: data,
      });
    } catch (err) {
      this.setState({
        error: err,
        isLoaded: false,
      });
    }
  }

  shufflePlaylist = (id) => {
    const { playlist } = this.state;
    const index = playlist.findIndex(pod => pod._id === id);
    const newPlaylist = [...(playlist.slice(index)), ...(playlist.slice(0, index))];
    this.setState({
      playlist: newPlaylist,
      autoPlay: true,
    });
  };

  handleAutoPlay = (value) => {
    this.setState({
      autoPlay: value,
    });
  };

  render() {
    return (
      <div className="Home">
        <div className="Home-Player">
          <PlayerContainer
            playlist={this.state.playlist}
            auto={this.state.autoPlay}
            onSelect={this.shufflePlaylist}
          />
        </div>
        <div className="Home-Playing">Now playing</div>
        <div className="Home-Playlist">
          <Playlist
            playlist={this.state.playlist}
            onSelect={this.shufflePlaylist}
          />
        </div>
      </div>
    );
  }
}

export default Home;

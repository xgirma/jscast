import React, { Component } from 'react';
import PlayerContainer from './PlayerContainer';
import { getRecent, getPopular } from '../api/api';
import { defPlaylist } from '../utils/default.';
import '../style/Home.css';

class Home extends Component {
  static propTypes = {};

  static defaultProps = {};

  displayName = 'Home';

  state = {
    error: null,
    isLoaded: false,
    playlist: defPlaylist,
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

  render() {
    return (
      <div className="Home">
        <div className="Home-Player">
          <PlayerContainer playlist={this.state.playlist} />
        </div>
        <div className="Home-Playing">Now playing</div>
        <div className="Home-Playlist">Playlist</div>
      </div>
    );
  }
}

export default Home;

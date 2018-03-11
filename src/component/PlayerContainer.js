import React, { Component } from 'react';
import { typePlaylist } from '../utils/type';
import { defPlaylist } from '../utils/default.';
import Player from './Player';
import '../style/PlayerContainer.css';

class PlayerContainer extends Component {
  static propTypes = {
    playlist: typePlaylist,
  };

  static defaultProps = {
    playlist: defPlaylist,
  };

  displayName = 'PlayerContainer';

  state = {};

  render() {
    const { playlist } = this.props;
    const playing = playlist[0];
    return (
      <div className="PlayerContainer">
        <Player playing={playing} />
      </div>
    );
  }
}

export default PlayerContainer;

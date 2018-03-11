import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import '../style/Player.css';
import { typePod } from '../utils/type';
import { defPod } from '../utils/default.';

class Player extends Component {
  static propTypes = {
    playing: typePod,
  };

  static defaultProps = {
    playing: defPod,
  };

  displayName = 'Player';

  state = {};

  render() {
    const { url, episodeTitle } = this.props.playing;
    console.log('final', this.props.playing);
    return (
      <div className="container-Player">
        <ReactAudioPlayer
          src={url}
          controls
        />
        <p>{episodeTitle}</p>
      </div>
    );
  }
}

export default Player;

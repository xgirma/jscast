import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';
import '../style/Player.css';
import { typePod } from '../utils/type';
import { defPod } from '../utils/default';

class Player extends Component {
  static propTypes = {
    playing: typePod,
    auto: PropTypes.bool,
  };

  static defaultProps = {
    playing: defPod,
    auto: false,
  };

  displayName = 'Player';

  state = {};

  render() {
    const { url, episodeTitle } = this.props.playing;
    const auto = this.props.auto;

    return (
      <div className="container-Player">
        <ReactAudioPlayer
          src={url}
          controls
          autoPlay={auto}
        />
        <p>{episodeTitle}</p>
      </div>
    );
  }
}

export default Player;

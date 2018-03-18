import React, { Component } from 'react';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import ReactAudioPlayer from 'react-audio-player';
import PropTypes from 'prop-types';
import { typePlaylist } from '../utils/type';
import { defPlaylist } from '../utils/default';
import '../style/Player.css';

class Player extends Component {
  static propTypes = {
    playlist: typePlaylist,
    nextPod: PropTypes.func,
    previousPod: PropTypes.func,
    auto: PropTypes.bool,
  };
  static defaultProps = {
    playlist: defPlaylist,
    nextPod: () => {},
    previousPod: () => {},
    auto: true,
  };

  displayName = 'Player';

  handleNext = () => {
    const { nextPod } = this.props;
    nextPod();
  };

  handlePrevious = () => {
    const { previousPod } = this.props;
    previousPod();
  };

  render() {
    const { playlist, auto } = this.props;
    const { url, title } = playlist[0];

    return (
      <div className="Player">
        <div
          className="Player-navigation"
          role="link"
          onClick={this.handlePrevious}
        > <FaArrowCircleLeft />
        </div>
        <div className="Player-player">
          <ReactAudioPlayer
            src={url}
            controls
            autoPlay={auto}
          />
        </div>
        <div className="playing-title"> {title} </div>
        <div
          className="Player-navigation"
          role="link"
          onClick={this.handleNext}
        > <FaArrowCircleRight />
        </div>
      </div>
    );
  }
}

export default Player;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import { typePlaylist } from '../utils/type';
import { defPlaylist } from '../utils/default.';
import Player from './Player';
import '../style/PlayerContainer.css';

class PlayerContainer extends Component {
  static propTypes = {
    playlist: typePlaylist,
    auto: PropTypes.bool,
    onSelect: PropTypes.func,
    autoPlay: PropTypes.func,
  };

  static defaultProps = {
    playlist: defPlaylist,
    auto: false,
    onSelect: () => {},
    autoPlay: () => {},
  };

  displayName = 'PlayerContainer';

  state = {};

  handlePrevious = () => {
    const { playlist, onSelect, autoPlay } = this.props;
    onSelect(playlist[9]._id);
    autoPlay(true);
  };

  handleNext = () => {
    const { playlist, onSelect, autoPlay } = this.props;
    onSelect(playlist[1]._id);
    autoPlay(true);
  };

  render() {
    const { playlist, auto } = this.props;
    const playing = playlist[0];
    return (
      <div className="PlayerContainer">
        <div
          className="previous"
          role="link"
          onClick={this.handlePrevious}
        >
          <FaArrowCircleLeft />
        </div>
        <Player playing={playing} auto={auto} />
        <div
          className="previous"
          role="link"
          onClick={this.handleNext}
        >
          <FaArrowCircleRight />
        </div>
      </div>
    );
  }
}

export default PlayerContainer;

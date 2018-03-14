import React, {Component} from 'react';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import ReactAudioPlayer from 'react-audio-player';
import '../style/Player.css';
import PropTypes from "prop-types";
import {typePlaylist} from "../utils/type";
import {defPlaylist} from "../utils/default";

class Player extends Component {
  static propTypes = {
    playlist: typePlaylist,
    nextPod: PropTypes.func,
    previousPod: PropTypes.func,
  };
  static defaultProps = {
    playlist: defPlaylist,
    nextPod: () => {},
    previousPod: () => {},
  };
  
  displayName = 'Player';
  
  handleNext = () => {
    const {nextPod} = this.props;
    nextPod();
  };
  
  handlePrevious = () => {
    const {previousPod} = this.props;
    previousPod();
  };
  
  render() {
    const {playlist, auto} = this.props;
    const url = playlist[0].url;
    const title = playlist[0].title;
    
    return (
      <div className="Player">
        <div className="navigation"
          role="link"
          onClick={this.handlePrevious}
        > <FaArrowCircleLeft/> </div>
        <div className="audio-player">
          <ReactAudioPlayer
            src={url}
            controls
            autoPlay={auto}
          />
        </div>
        <div className="playing-title"> {title} </div>
        <div className="navigation"
          role="link"
          onClick={this.handleNext}
        > <FaArrowCircleRight/> </div>
      </div>);
  }
}

export default Player;

import React, {Component} from 'react';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import ReactAudioPlayer from 'react-audio-player';
import '../style/Player.css';

class Player extends Component {
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
    console.log('playlist from props: ', this.props);
    const url = playlist[0].url;
    const title = playlist[0].title;
    
    return (
      <div className="Player">
        <div
          className="navigation"
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
        
        <div
          className="navigation"
          role="link"
          onClick={this.handleNext}
        > <FaArrowCircleRight/> </div>
      </div>);
  }
}

export default Player;

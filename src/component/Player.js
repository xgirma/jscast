import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import Duration from '../utils/Duration';
import FaPause from 'react-icons/lib/fa/pause';
import FaPlay from 'react-icons/lib/fa/play';
import FaArrowCircleLeft from 'react-icons/lib/fa/arrow-circle-left';
import FaArrowCircleRight from 'react-icons/lib/fa/arrow-circle-right';
import PropTypes from 'prop-types';
import {defPlaylist} from '../utils/default';
import {typePlaylist} from '../utils/type';
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
    nextPod: () => {
    },
    previousPod: () => {
    },
    auto: true,
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
  
  state = {
    url: 'https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3',
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  };
  
  componentDidMount() {
    const {playlist} = this.props;
    const {url} = playlist[0];
    this.setState({
      url,
    });
  }
  
  playPause = () => {
    this.setState({playing: !this.state.playing});
  };
  
  onPlay = () => {
    this.setState({playing: true});
  };
  
  onPause = () => {
    this.setState({playing: false});
  };
  
  onSeekMouseDown = (e) => {
    this.setState({seeking: true});
  };
  
  onSeekChange = (e) => {
    this.setState({played: parseFloat(e.target.value)});
  };
  
  onSeekMouseUp = (e) => {
    this.setState({seeking: false});
    this.player.seekTo(parseFloat(e.target.value));
  };
  
  onProgress = (state) => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  };
  
  onEnded = () => {
    this.setState({playing: this.state.loop});
  };
  
  onDuration = (duration) => {
    this.setState({duration});
  };
  
  ref = (player) => {
    this.player = player;
  };
  
  render() {
    const {
      url, playing, volume, muted, loop, played, loaded, duration, playbackRate,
    } = this.state;
    
    return (
      <div className="Player">
        <section>
          <div>
            <ReactPlayer
              ref={this.ref}
              className="react-player"
              width="100%"
              height="100%"
              url={url}
              playing={playing}
              loop={loop}
              playbackRate={playbackRate}
              volume={volume}
              muted={muted}
              onPlay={this.onPlay}
              onPause={this.onPause}
              onEnded={this.onEnded}
              onProgress={this.onProgress}
              onDuration={this.onDuration}
            />
          </div>
  
          <div className="Player-elapsed">
            <Duration seconds={duration * played}/> | <Duration seconds={duration * (1 - played)}/>
          </div>
          
          <div className="Player-bar">
            <FaArrowCircleLeft />
            <span className="Player-play-pause"
                 role="button"
                 onClick={this.playPause}
                 style={{color: "#e74c3c"}}
            >
              {playing ? <FaPause/> : <FaPlay/>}
            </span>
            <span> {" | "}</span>
            <progress max={1} value={played} style={{color: 'red'}}/>
            <FaArrowCircleRight />
          </div>
  
          <div className="Player-seek">
            <input
              type="range"
              min={0}
              max={1}
              step="any"
              value={played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
            />
          </div>
          
          
          
        </section>
      </div>
    );
  }
}

export default Player;

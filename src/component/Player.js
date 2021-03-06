import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import moment from 'moment';
import FaPause from 'react-icons/lib/fa/pause';
import FaPlay from 'react-icons/lib/fa/play';
import Duration from '../utils/duration';
import Social from './Social';
import { defPlaylist } from '../utils/default';
import { typePlaylist } from '../utils/type';
import '../style/Player.css';

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

  state = {
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  };

  onPlay = () => {
    this.setState({ playing: true });
  };

  onPause = () => {
    this.setState({ playing: false });
  };

  onSeekMouseDown = () => {
    this.setState({ seeking: true });
  };

  onSeekChange = (e) => {
    this.setState({
      played: parseFloat(e.target.value),
    });
  };

  onSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  onProgress = (state) => {
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  onEnded = () => {
    this.setState({
      playing: this.state.loop,
    });
  };

  onDuration = (duration) => {
    this.setState({ duration });
  };

  playPause = () => {
    this.setState({
      playing: !this.state.playing,
    });
  };

  handleNext = () => {
    const { nextPod } = this.props;
    nextPod();
  };

  handlePrevious = () => {
    const { previousPod } = this.props;
    previousPod();
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    const {
      playing, volume, muted, loop, played, duration, playbackRate,
    } = this.state;

    const { playlist } = this.props;
    const { url } = playlist[0];
    const { episodeTitle, published } = playlist[0];
    const date = moment(published).format('MMM DD YY');

    return (
      <div className="Player">
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
        <progress max={1} value={played} className="Player-bar" />
        <input
          type="range"
          className="Player-seek"
          min={0}
          max={1}
          step="any"
          value={played}
          onMouseDown={this.onSeekMouseDown}
          onChange={this.onSeekChange}
          onMouseUp={this.onSeekMouseUp}
        />
        <div className="Player-title">
          Now Playing: {episodeTitle} - <span style={{ fontWeight: 'bold' }}>{date}</span>
        </div>
        <h4 className="Player-controls">
          <div
            role="button"
            onClick={this.playPause}
            className="Player-play"
          >
            {playing
              ? <FaPause />
              : <FaPlay />
            }
          </div>
          <div className="Player-duration" style={{ alignContent: 'end' }}>
            <Duration seconds={duration * played} />
            <span> - </span>
            <Duration seconds={duration * (1 - played)} />
          </div>
          <Social className="Player-social" />
        </h4>
      </div>
    );
  }
}

export default Player;

import React, { Component } from 'react';
import h2p from 'html2plaintext';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import PropTypes from 'prop-types';
import { defPod } from '../utils/default';
import { getPods } from '../actions';
import { typePlaylist } from '../utils/type';
import { TEN_RECENT, TEN_POPULAR } from '../utils/path';
import '../style/Playing.css';

class Playing extends Component {
  static propTypes = {
    playlist: typePlaylist,
    recent: PropTypes.bool,
    likePod: PropTypes.func,
    previousPod: PropTypes.func,
    nextPod: PropTypes.func,
  };

  static defaultProps = {
    playlist: defPod,
    recent: true,
    likePod: () => {},
    previousPod: () => {},
    nextPod: () => {},
  };

  displayName = 'Playing';

  state = {
    liked: false,
  };

  componentDidMount() {
    const { recent } = this.props;
    if (recent) {
      getPods(TEN_RECENT);
    } else {
      getPods(TEN_POPULAR);
    }
  }

  handleLike = () => {
    const { likePod, playlist } = this.props;
    const id = playlist[0]._id;
    likePod(id);
    this.setState({
      liked: true,
    });
  };

  handlePrevious = () => {
    const { playlist, previousPod } = this.props;
    previousPod(playlist[9]._id);
  };

  handleNext = () => {
    const { playlist, nextPod } = this.props;
    nextPod(playlist[1]._id);
  };

  render() {
    const { playlist } = this.props;
    const { title, episodeDescription, likes } = playlist[0];

    return (
      <div className="Playing">
        <div className="Playing-Detail">
          <p>
            <span style={{ fontWeight: 'bold' }}>
              {title}{' '}
            </span>
            {h2p(episodeDescription)} {' '}
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>
              {' '}Likes: {this.state.liked ? (likes + 1) : likes}
            </span>
          </p>
        </div>

        <div className="Playing-nav">
          <h2>
            <FaArrowLeft className="Playing-previous" role="link" onClick={this.handlePrevious} />
          </h2>
          <h2>
            <MdThumbUp className="Playing-like" role="link" onClick={this.handleLike} />
          </h2>
          <h2>
            <FaArrowRight className="Playing-next" role="link" onClick={this.handleNext} />
          </h2>
        </div>
      </div>
    );
  }
}

export default Playing;

import React, { Component } from 'react';
import h2p from 'html2plaintext';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import PropTypes from 'prop-types';
import { typePlaylist } from '../utils/type';
import { defPod } from '../utils/default';
import { getPods } from '../actions';
import { TEN_RECENT, TEN_POPULAR } from '../utils/path';
import '../style/Playing.css';

class Playing extends Component {
  static propTypes = {
    playlist: typePlaylist,
    recent: PropTypes.bool,
    likePod: PropTypes.func,
  };

  static defaultProps = {
    playlist: defPod,
    recent: true,
    likePod: () => {},
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

  render() {
    const { playlist } = this.props;
    const {
      episodeTitle, title, link, author, copyright,
      episodeDescription, published, likes,
    } = playlist[0];

    return (
      <div className="Playing">
        <div
          className="container-Like"
          role="link"
          onClick={this.handleLike}
        >
          <MdThumbUp />
        </div>
        <div>
          <p>{episodeTitle}</p>
          <p>{title}</p>
          <p>{link}</p>
          <p>{author}</p>
          <p>{copyright}</p>
          <p>{h2p(episodeDescription)}</p>
          <p>{published}</p>
          <p>{this.state.liked ? (likes + 1) : likes}</p>
        </div>
      </div>
    );
  }
}

export default Playing;

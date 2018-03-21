import React, {Component} from 'react';
import h2p from 'html2plaintext';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import FaLongArrowLeft from 'react-icons/lib/fa/long-arrow-left';
import FaLongArrowRight from 'react-icons/lib/fa/long-arrow-right';
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaTwitter from 'react-icons/lib/fa/twitter';
import PropTypes from 'prop-types';
import {defPod} from '../utils/default';
import {getPods, nextPod, previousPod} from '../actions';
import {typePlaylist} from '../utils/type';
import {TEN_RECENT, TEN_POPULAR} from '../utils/path';
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
    likePod: () => {
    },
  };
  
  displayName = 'Playing';
  
  state = {
    liked: false,
  };
  
  componentDidMount() {
    const {recent} = this.props;
    if (recent) {
      getPods(TEN_RECENT);
    } else {
      getPods(TEN_POPULAR);
    }
  }
  
  handleLike = () => {
    const {likePod, playlist} = this.props;
    const id = playlist[0]._id;
    likePod(id);
    this.setState({
      liked: true,
    });
  };
  
  handlePrevious = () => {
    const {playlist, previousPod} = this.props;
    previousPod(playlist[9]._id);
  };
  
  handleNext = () => {
    const {playlist, nextPod} = this.props;
    nextPod(playlist[1]._id);
  };
  
  render() {
    const {playlist} = this.props;
    const {
      title, author, episodeDescription, likes,
    } = playlist[0];
    
    return (
      <div className="Playing">
        <div className="Playing-Detail">
          <p>
            <span style={{fontWeight: 'bold'}}>
              {title}{" "}
              </span>
            {h2p(episodeDescription)} {" "}
            <span>
              {" "}{author !== title && author}
            </span>
            <span style={{fontWeight: 'bold'}}>
            {" "}Likes: {this.state.liked ? (likes + 1) : likes}
          </span>
          </p>
        </div>
        
        <h3>
          <span className="Playing-previous" role="link" onClick={this.handlePrevious}>
            <FaLongArrowLeft/>
          </span>
          <span>{" "}</span>
          <span className="Playing-like" role="link" onClick={this.handleLike}>
            <MdThumbUp />
          </span>
          <span>{" "}</span>
          <span><FaFacebookOfficial /></span>
          <span>{" "}</span>
          <span><FaTwitter/></span>
          <span>{" "}</span>
          <span className="Playing-next" role="link" onClick={this.handleNext}>
            <FaLongArrowRight/>
          </span>
        </h3>
      </div>
    );
  }
}

export default Playing;

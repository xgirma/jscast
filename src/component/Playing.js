import React, {Component} from 'react';
import h2p from 'html2plaintext';
import {typePod} from "../utils/type";
import {defPod} from "../utils/default";
import '../style/Playing.css';

class Playing extends Component {
  static propTypes = {
    playing: typePod,
  };
  
  static defaultProps = {
    playing: defPod,
  };
  
  displayName = 'Playing';
  
  render() {
    const {playlist} = this.props;
    const {episodeTitle, title, link, author, copyright,
      episodeDescription, published, likes} = playlist[0];
    
    return (
      <div className="Playing">
        <p>{episodeTitle}</p>
        <p>{title}</p>
        <p>{link}</p>
        <p>{author}</p>
        <p>{copyright}</p>
        <p>{h2p(episodeDescription)}</p>
        <p>{published}</p>
        <p>{likes}</p>
      </div>
    )
  }
}

export default Playing;

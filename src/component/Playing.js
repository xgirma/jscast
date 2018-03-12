import React, {Component} from 'react';
import h2p from 'html2plaintext';
import '../style/Playing.css';
import {typePod} from "../utils/type";
import {defPod} from "../utils/default";

class Playing extends Component {
  static propTypes = {
    playing: typePod,
  };
  
  static defaultProps = {
    playing: defPod,
  };
  
  displayName = 'Playing';
  
  state = {};
  
  render() {
    const {episodeTitle, title, link, author, copyright, episodeDescription, published, likes} = this.props.playing;
    
    return (
      <div className="container-Playing">
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
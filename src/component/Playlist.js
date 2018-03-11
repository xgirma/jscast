import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Play from './Play';
import {typePlaylist} from "../utils/type";
import {defPlaylist} from "../utils/default";
import '../style/Playlist.css';

class Playlist extends Component {
  static propTypes = {
    playlist: typePlaylist,
    onSelect: PropTypes.func,
  };
  
  static defaultProps = {
    playlist: defPlaylist,
    onSelect: () => {},
  };
  
  displayName = 'Playlist';
  
  state = {};
  
  render() {
    const { playlist, onSelect } = this.props;
    
    return (
      <div className="container-Playlist">
        {
          playlist.map(play => (
            <Play
              key={play._id}
              play={play}
              onSelect={onSelect}
            />
          ))
        }
      </div>
    )
  }
}

export default Playlist;
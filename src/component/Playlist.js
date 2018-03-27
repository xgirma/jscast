import React from 'react';
import PropTypes from 'prop-types';
import Pod from './Pod';
import { defPlaylist } from '../utils/default';
import { typePlaylist } from '../utils/type';
import '../style/Playlist.css';

const Playlist = ({ playlist, onPodClick, recent }) => (
  <div className="Playlist">
    {
      playlist.map(pod => (
        <Pod key={pod._id} pod={pod} onPodClick={onPodClick} recent={recent}/>
      ))
    }
  </div>
);

Playlist.propTypes = {
  playlist: typePlaylist,
  onPodClick: PropTypes.func,
};

Playlist.defaultProps = {
  playlist: defPlaylist,
  onPodClick: () => {},
};

Playlist.displayName = 'Playlist';

export default Playlist;

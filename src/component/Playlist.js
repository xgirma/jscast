import React from 'react';
import PropTypes from 'prop-types';
import Pod from './Pod';
import { typePlaylist } from '../utils/type';
import { defPlaylist } from '../utils/default';
import '../style/Playlist.css';

const Playlist = ({ playlist, onPodClick }) => (
  <div className="Playlist">
    {
      playlist.map(pod => (
        <Pod key={pod._id} pod={pod} onPodClick={onPodClick} />
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

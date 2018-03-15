import { connect } from 'react-redux';
import Playlist from '../component/Playlist';
import { selectPod } from '../actions/playlist';

const mapStateToProps = ({ playlist, autoPlay }) => ({
  playlist,
  auto: autoPlay,
});

const mapDispatchToProps = dispatch => ({
  onPodClick: id => dispatch(selectPod(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

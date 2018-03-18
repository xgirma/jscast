import { connect } from 'react-redux';
import { selectPod } from '../actions';
import Playlist from '../component/Playlist';

const mapStateToProps = ({ playlist, autoPlay }) => ({
  playlist,
  auto: autoPlay,
});

const mapDispatchToProps = dispatch => ({
  onPodClick: id => dispatch(selectPod(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

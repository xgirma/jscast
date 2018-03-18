import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../component/Player';
import { nextPod, previousPod } from '../actions';

const mapStateToProps = ({ playlist, autoPlay }) => ({
  playlist,
  auto: autoPlay,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  nextPod,
  previousPod,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Player from '../component/Player';
import {nextPod, previousPod} from '../actions/playlist';

const mapStateToProps = ({playlist, autoPlay}) => ({
  playlist: playlist,
  auto: autoPlay,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    nextPod,
    previousPod,
  }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);

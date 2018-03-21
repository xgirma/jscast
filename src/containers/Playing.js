import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Playing from '../component/Playing';
import {likePod, nextPod, previousPod} from '../actions';

const mapStateToProps = ({ playlist }) => ({
  playlist,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  likePod,
  nextPod,
  previousPod,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playing);

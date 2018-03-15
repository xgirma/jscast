import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Playing from '../component/Playing';
import { likePod } from '../actions/playlist';

const mapStateToProps = ({ playlist }) => ({
  playlist,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  likePod,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playing);

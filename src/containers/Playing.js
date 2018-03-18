import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { likePod } from '../actions';
import Playing from '../component/Playing';

const mapStateToProps = ({ playlist }) => ({
  playlist,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  likePod,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playing);

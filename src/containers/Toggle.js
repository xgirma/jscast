import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Toggle from '../component/Toggle';
import { getPods, getPodsByChannel } from '../actions/playlist';

const mapStateToProps = ({ recent, library, channel }) => ({
  recent, library, channel
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPods, getPodsByChannel
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);

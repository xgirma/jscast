import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Toggle from '../component/Toggle';
import { getPods } from '../actions/playlist';

const mapStateToProps = ({ recent, library }) => ({
  recent, library,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPods,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);

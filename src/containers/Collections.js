import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Collections from '../component/Collections';
import { nextChannel, previousChannel } from '../actions';

const mapStateToProps = ({ collections }) => ({
  collections,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  nextChannel,
  previousChannel,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Collections);

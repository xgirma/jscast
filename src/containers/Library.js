import { connect } from 'react-redux';
import Channels from '../component/Library';

const mapStateToProps = ({ channels }) => ({
  channels,
});

export default connect(mapStateToProps)(Channels);

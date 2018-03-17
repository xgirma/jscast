import { connect } from 'react-redux';
import Channels from '../component/Channels';

const mapStateToProps = ({ channels }) => ({
  channels,
});

export default connect(mapStateToProps)(Channels);

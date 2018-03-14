import {connect} from 'react-redux';
import Playing from '../component/Playing';

const mapStateToProps = ({playlist}) => ({
  playlist: playlist,
});

export default connect(mapStateToProps)(Playing);

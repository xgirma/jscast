import {connect} from 'react-redux';
import Footer from "../component/Footer";

const mapStateToProps = ({ playlist, recent }) => ({
  playlist,
  recent,
});

export default connect(mapStateToProps)(Footer);

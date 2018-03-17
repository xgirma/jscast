import { connect } from 'react-redux';
import Collections from '../component/Collections';

const mapStateToProps = ({ collections }) => ({
  collections,
});

export default connect(mapStateToProps)(Collections);

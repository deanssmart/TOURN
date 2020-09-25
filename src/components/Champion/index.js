import { connect } from 'react-redux';
import Champion from './Champion';

const mapStateToProps = ({ champion }) => ({ champion });

export default connect(mapStateToProps)(Champion);
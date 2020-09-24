import { connect } from 'react-redux';
import Tournament from './Tournament';

const mapStateToProps = ({ numberOfRounds }) => ({ numberOfRounds });

export default connect(mapStateToProps)(Tournament);
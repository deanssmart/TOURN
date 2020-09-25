import { connect } from 'react-redux';
import Tournament from './Tournament';

const mapStateToProps = ({ numberOfRounds, complete }) => ({ numberOfRounds, complete });

export default connect(mapStateToProps)(Tournament);
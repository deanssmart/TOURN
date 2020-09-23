import { connect } from 'react-redux';
import Tournament from './Tournament';

const mapStateToProps = ({ games }) => ({ games });

export default connect(mapStateToProps)(Tournament);
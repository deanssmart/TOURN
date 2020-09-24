import { connect } from 'react-redux';
import Tournament from './Tournament';

const mapStateToProps = ({ games, players }) => ({ games, players });

export default connect(mapStateToProps)(Tournament);
import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = ({ tournamentStarted }) => ({ tournamentStarted });

export default connect(mapStateToProps)(App);
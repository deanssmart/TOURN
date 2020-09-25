import { connect } from 'react-redux';
import Footer from './Footer';
import { reset, startTournament, playerNumberError } from '../../data/actions/state';

const mapStateToProps = ({ tournamentStarted, players }) => ({ tournamentStarted, players });

const mapDispatchToProps = dispatch => {
    return {
        handleReset: () => dispatch(reset()),
        handleStartTournament: (players) => dispatch(startTournament(players)),
        handleError: () => dispatch(playerNumberError()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
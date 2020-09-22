import { connect } from 'react-redux';
import Tournament from './Tournament';
import { addPlayer } from '../../data/actions/state';
import { startTournament } from '../../data/actions/state';

const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = dispatch => {
    return {
        handleAddPlayer: (player) => dispatch(addPlayer(player)),
        handleStartTournament: (players) => dispatch(startTournament(players)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tournament);
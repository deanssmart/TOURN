import { connect } from 'react-redux';
import Settings from './Settings';
import { addPlayer, startTournament } from '../../data/actions/state';

const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = dispatch => {
    return {
        handleAddPlayer: (player) => dispatch(addPlayer(player)),
        handleStartTournament: (players) => dispatch(startTournament(players)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
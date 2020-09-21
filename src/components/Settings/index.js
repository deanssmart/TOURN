import { connect } from 'react-redux';
import Settings from './Settings';
import { addPlayer } from '../../data/actions/state';
import { startTournament } from '../../data/actions/state';

const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = dispatch => {
    return {
        handleAddPlayer: (player) => dispatch(addPlayer(player)),
        handleStartTournament: () => dispatch(startTournament()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
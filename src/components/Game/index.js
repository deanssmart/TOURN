import { connect } from 'react-redux';
import Game from './Game';
import { playerWon } from '../../data/actions/state';

const mapDispatchToProps = dispatch => {
    return {
        handleWin: (player, roundID) => dispatch(playerWon(player, roundID)),
    };
};

export default connect(null, mapDispatchToProps)(Game);
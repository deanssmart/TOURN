import { connect } from 'react-redux';
import Game from './Game';
import { playerWon } from '../../data/actions/state';

const mapStateToProps = ({ roundsCompleted, totalRounds }) => ({ roundsCompleted, totalRounds });

const mapDispatchToProps = dispatch => {
    return {
        handleWin: (player, roundID) => dispatch(playerWon(player, roundID)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
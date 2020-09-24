import { connect } from 'react-redux';
import Game from './Game';
import { playerWon } from '../../data/actions/state';

// const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = dispatch => {
    return {
        handleWin: (winner, playerID) => dispatch(playerWon(winner, playerID)),
        // handleP1Win: (1) => dispatch()
    };
};

export default connect(null, mapDispatchToProps)(Game);
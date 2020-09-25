import { connect } from 'react-redux';
import Game from './Game';
import { playerWon } from '../../data/actions/state';

const mapStateToProps = ({ players }) => ({ players });

const mapDispatchToProps = dispatch => {
    return {
        handleWin: (player, roundID) => dispatch(playerWon(player, roundID)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
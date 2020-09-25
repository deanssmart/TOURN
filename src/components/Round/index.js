import { connect } from "react-redux";
import Round from './Round';
import { nextRound, reset } from '../../data/actions/state';

const mapStateToProps = ({ rounds, totalRounds }) => ({ rounds, totalRounds });

const mapDispatchToProps = dispatch => {
    return {
        handleNextRound: () => dispatch(nextRound()),
        handleReset: () => dispatch(reset()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Round);
import { connect } from "react-redux";
import Round from './Round';
import { nextRound } from '../../data/actions/state';

const mapStateToProps = ({ rounds, totalRounds, playerCounter }) => ({ rounds, totalRounds, playerCounter });

const mapDispatchToProps = dispatch => {
    return {
        handleNextRound: () => dispatch(nextRound()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Round);
import { connect } from 'react-redux';
import Settings from './Settings';
import { addPlayer } from '../../data/actions/state';


const mapStateToProps = ({ players, playerNumberError }) => ({ players, playerNumberError });

const mapDispatchToProps = dispatch => {
    return {
        handleAddPlayer: (player) => dispatch(addPlayer(player)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
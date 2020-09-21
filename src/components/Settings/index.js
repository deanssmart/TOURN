import { connect } from 'react-redux';
import Settings from './Settings';
import { savePlayers } from '../../data/actions/state';

const mapDispatchToProps = dispatch => {
    return {
        handleSave: (player) => dispatch(savePlayers(player))
    };
};

export default connect(null, mapDispatchToProps)(Settings);
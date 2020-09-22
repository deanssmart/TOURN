import { shuffleArray } from './helperFunctions/shuffleArray';
import { chunkArray } from './helperFunctions/chunkArray';

const addPlayerReducer = (state, { player }) => {
    return {
        ...state,
        players: [...state.players, player],
    };
};

const startTournamentReducer = (state, { players }) => {
    
    return {
        ...state,
        games: chunkArray(shuffleArray(players), 2),
        tournamentStarted: true,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayerReducer(state, action);
        case "START_TOURNAMENT": return startTournamentReducer(state, action);
        default: return state;
    };
};

export default reducer;
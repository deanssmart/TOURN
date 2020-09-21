import { shuffleArray } from './helperFunctions/shuffle';

const addPlayerReducer = (state, { player }) => {
    return {
        ...state,
        players: [...state.players, player],
    };
};

const startTournamentReducer = (state, { players }) => {
    return {
        ...state,
        players: shuffleArray(players),
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
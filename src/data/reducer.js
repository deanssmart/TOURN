const addPlayerReducer = (state, { player }) => {
    return {
        ...state,
        players: [...state.players, player],
    };
};

const startTournamentReducer = (state) => {
    return {
        ...state,
        tournamentStarted: true,
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayerReducer(state, action);
        case "START_TOURNAMENT": return startTournamentReducer(state);
        default: return state;
    };
};

export default reducer;
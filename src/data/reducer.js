const addPlayerReducer = (state, { player }) => {
    return {
        ...state,
        players: [...state.players, player],
    };
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayerReducer(state, action);
        default: return state;
    };
};

export default reducer;
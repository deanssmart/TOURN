import { shuffleArray } from './helperFunctions/shuffleArray';
import { chunkArray } from './helperFunctions/chunkArray';

const addPlayerReducer = (state, { player }) => {
    return {
        ...state,
        counter: state.counter + 1,
        players: [...state.players, 
            {
                "id": state.counter + 1,
                "name": player.trim(),
                "won": false,
                "played": false,
            }
        ],
    };
};

const startTournamentReducer = (state, { players }) => {
    let games = chunkArray(shuffleArray([...players]), 2);
    let rounds = games.length;
    
    return {
        ...state,
        tournamentStarted: true,
        games,
        rounds,   
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
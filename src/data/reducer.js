import initial from './initial';
import { shuffleArray } from './helperFunctions/shuffleArray';
import { chunkArray } from './helperFunctions/chunkArray';

const addPlayer = (state, { player }) => {
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

const startTournament = (state, { players }) => {
    //takes a copy of the players array mix up the positions using the shuffleArray helper function and then pass the new shuffled players to the chunckArray helper function to split it into pairings for the tournament
    let games = chunkArray(shuffleArray([...players]), 2);
    let rounds = games.length;
    
    return {
        ...state,
        players: initial.players, 
        tournamentStarted: true,
        games,
        rounds,   
    };
};

const playerWon = (state, { id }) => {
    let games = state.games.map(game => game.map(player => {
            if (player.id === id) {
                return {
                    ...player,
                    won: !state.won,
                };
            }
            return player;
        }))    

    return {
        ...state,
        games,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        case "START_TOURNAMENT": return startTournament(state, action);
        case "PLAYER_WON": return playerWon(state, action);
        default: return state;
    };
};

export default reducer;
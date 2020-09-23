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

// const createGames = (state, { players }) => {

// }

const startTournament = (state, { players }) => {
    //takes a copy of the players array mix up the positions using the shuffleArray helper function and then pass the new shuffled players to the chunckArray helper function to split it into pairings for the tournament
    let games = chunkArray(shuffleArray([...players]), 2);
    let rounds = games.length;
    
    return {
        ...state,
        players, 
        tournamentStarted: true,
        games,
        rounds,   
    };
};

const playerWon = (state, { player }) => {
    // const findGame = state.games.filter(game => game.find(player => player.id === id))[0];
    // console.log(findGame);

    // const findPlayer = state.players.find(player => player.id === id);
    // console.log(findPlayer);
    let games = state.games.map(game => game.map(p => {
            if (p.id === player.id) {
                return {
                    ...p,
                    won: !player.won,
                };
            }
            return p;
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
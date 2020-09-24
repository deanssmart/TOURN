import initial from './initial';
import { shuffleArray } from './helperFunctions/shuffleArray';
import { chunkArray } from './helperFunctions/chunkArray';

//add players to the players array
const addPlayer = (state, { player }) => {
    return {
        ...state,
        playerCounter: state.playerCounter + 1,
        players: [...state.players, 
            {
                "id": state.playerCounter + 1,
                "name": player.trim(),
            }
        ],
    };
};

//create an array of game objects to be populated with players
const createGames = (state, { players }) => {
    let gameID = 1;
    let games = [];
    let numberOfGames = players.length / 2;
    let numberOfRounds = Math.log2(players.length);
    
    for(let i = 1; i <= numberOfRounds; i += 1) {
        for(let j = 1; j <= numberOfGames; j += 1) {
            games[games.length] = {
                id: gameID,
                round: i,
                p1: "",
                p2: "",
                winner: 0,
            };
            gameID += 1;
        };
        numberOfGames /= 2;
    };

    return {
        ...state,
        games,
    };
};

const populateGames = (state, { players }) => {
    let playing = [];
    if(state.currentRound === 0) {
        let shuffledPlayers = shuffleArray([...players]);
        playing = shuffledPlayers.map(player => player.id)
        console.log(playing);

    }
    
    let games = state.games.map((game, i) => {
        if(game.round === state.currentRound + 1) {
            console.log(playing[i]);
            return {
                ...game,
                p1: playing.pop(),
                p2: playing.pop(),
            };
        }
        return game;
    })
    
    return {
        ...state,
        games,
    }
}

// const startTournament = (state, { players }) => {
//     //takes a copy of the players array mix up the positions using the shuffleArray helper function and then pass the new shuffled players to the chunckArray helper function to split it into pairings for the tournament
//     let games = chunkArray(shuffleArray([...players]), 2);
//     let rounds = games.length;
    
//     return {
//         ...state,
//         players, 
//         tournamentStarted: true,
//         games,
//         rounds,   
//     };
// };

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
        case "START_TOURNAMENT": return populateGames(createGames(state, action), action);
        case "PLAYER_WON": return playerWon(state, action);
        default: return state;
    };
};

export default reducer;
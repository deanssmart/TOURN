import initial from './initial';
import { shuffleArray } from './helperFunctions/shuffleArray';
import { chunkArray } from './helperFunctions/chunkArray';
import { addGameID } from './helperFunctions/addGameID';

//add players to the players array
const addPlayer = (state, { player }) => {
    return {
        ...state,
        playerCounter: state.playerCounter + 1,
        players: [...state.players, 
            {
                playerID: state.playerCounter + 1,
                name: player.trim(),
                roundID: 1,
            }
        ],
    };
};


const startTournament = (state, { players }) => {
    let updateRounds = state.rounds.length ? addGameID(players) : addGameID(shuffleArray(players));

    return {
        ...state,
        players: initial.players,
        rounds: [...state.rounds, updateRounds],
        totalRounds: Math.log2(players.length),
        tournamentStarted: true,
        playerCounter: initial.playerCounter,
    };
};

const playerWon = (state, { player, roundID }) => {
    return {
        ...state,
        playerCounter: state.playerCounter + 1,
        players: [...state.players, 
        {
            playerID: state.playerCounter + 1,
            name: player,
            roundID: roundID + 1,
        }],
        champion: state.totalRounds === state.rounds.length ? player.name : null,
    };
};

const nextRound = (state, { players }) => {
    let updateRounds = addGameID(players);
    let final = state.roundsCompleted + 1 === state.totalRounds;

    return {
        ...state,
        players: initial.players,
        rounds: [...state.rounds, updateRounds],
        roundsCompleted: state.roundsCompleted + 1,
        final,
    };
};

const reset = () => {
    return {
        ...initial,
    };
};


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        case "START_TOURNAMENT": return startTournament(state, action);
        case "PLAYER_WON": return playerWon(state, action);
        case "NEXT_ROUND": return nextRound(state, action);
        case "RESET": return reset();
        default: return state;
    };
};

export default reducer;



// create an array of game objects to be populated with players, defining the games from the outset means that I can display all the tournament rounds on a single page
// const createGames = (state, { players }) => {
//     let gameID = 1;
//     let games = [];
//     let numberOfGames = players.length / 2;
//     let numberOfRounds = Math.log2(players.length);
    
//     for(let i = 1; i <= numberOfRounds; i += 1) {
//         for(let j = 1; j <= numberOfGames; j += 1) {
//             games[games.length] = {
//                 id: gameID,
//                 round: i,
//                 p1: 0,
//                 p2: 0,
//                 winner: 0,
//             };
//             gameID += 1;
//         };
//         numberOfGames /= 2;
//     };

//     return {
//         ...state,
//         games,
//         numberOfRounds,
//     };
// };

// populates games array with the players id, for the initial setup the shuffle array function is called to mix the players order, from then on the players are passed to the next round depending on who has won the previous round 
// const populateGames = (state, { players }) => {
//     let competingPlayers = [];
//     if(state.roundsCompleted === 0) {
//         let shuffledPlayers = shuffleArray([...players]);
//         competingPlayers = shuffledPlayers.map(player => player.id);
//     } 

    
//     let games = state.games.map((game) => {
//         if(game.round === state.roundsCompleted + 1) {
//             return {
//                 ...game,
//                 p1: competingPlayers.pop(),
//                 p2: competingPlayers.pop(),
//             };
//         }
//         return game;
//     })
    
//     return {
//         ...state,
//         games,
//         tournamentStarted: true,
//     }
// }

// const startTournament = (state, { players }) => {
//     takes a copy of the players array mix up the positions using the shuffleArray helper function and then pass the new shuffled players to the chunckArray helper function to split it into pairings for the tournament
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

// const playerWon = (state, { player }) => {
//     const findGame = state.games.filter(game => game.find(player => player.id === id))[0];
//     console.log(findGame);

//     const findPlayer = state.players.find(player => player.id === id);
//     console.log(findPlayer);
//     let games = state.games.map(game => game.map(p => {
//             if (p.id === player.id) {
//                 return {
//                     ...p,
//                     won: !player.won,
//                 };
//             }
//             return p;
//         }))    

//     return {
//         ...state,
//         games,

//     }
// }
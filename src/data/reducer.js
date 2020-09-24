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
                "winner": false,
            }
        ],
    };
};

//create an array of game objects to be populated with players, defining the games from the outset means that I can display all the tournament rounds on a single page
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
//     };
// };

//populates games array with the players id, for the initial set up the shuffle array function is called to mix the players order from then on the players are passed to the next round depending on who has won the previous round 
// const populateGames = (state, { players }) => {
//     let competing = [];
//     if(state.currentRound === 0) {
//         let shuffledPlayers = shuffleArray([...players]);
//         competing = shuffledPlayers.map(player => player.id);
//     } 

    
//     let games = state.games.map((game) => {
//         if(game.round === state.currentRound + 1) {
//             return {
//                 ...game,
//                 p1: competing.pop(),
//                 p2: competing.pop(),
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

const playerWon = (state, { winner, playerID }) => {
    const findGame = state.games.filter(game => game.find(player => player.id === playerID))[0];
    const findPlayer = findGame.find(player => player.id === playerID);

    const findGameIndex = state.games.findIndex(game => game.find(player => player.id === playerID));

    const findPlayerIndex = findGame.findIndex(player => player.id === playerID);

    let gamesCopy = [...state.games];
    
    gamesCopy[findGameIndex][findPlayerIndex].winner = winner;
    // gamesCopy[findPlayer].winner = true
    
    
    
    // let games = state.games.map(game => game.map(p => {
    //         if (p.id === player.id) {
    //             return {
    //                 ...p,
    //                 won: !player.won,
    //             };
    //         }
    //         return p;
    //     }))    


    return {
        ...state,
        games: [
            ...gamesCopy
        ]

    }
}

const nextRound = state => {
    return {
        ...state,
        currentRound: state.currentRound + 1,
    };
};


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        case "START_TOURNAMENT": return startTournament(state, action);
        case "PLAYER_WON": return playerWon(state, action);
        case "NEXT_ROUND": return nextRound(state);
        default: return state;
    };
};

export default reducer;
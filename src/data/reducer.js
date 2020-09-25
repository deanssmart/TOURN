import initial from './initial';
import { shuffleArray } from './helperFunctions/shuffleArray';
import { addGameID } from './helperFunctions/addGameID';



//adds players to the players array
const addPlayer = (state, { player }) => {    
    return {
        ...state,
        playerNumberError: false,
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

//starts the tournament, helper function notes can be found in the helper function folder, players are shuffled then added to the rounds array, empties the players array ready for the intake of winners of each game
const startTournament = (state, { players }) => {
    let updateRounds = addGameID(shuffleArray(players));
    let totalRounds = Math.log2(players.length);

    return {
        ...state,
        players: initial.players,
        rounds: [...state.rounds, updateRounds],
        totalRounds,
        tournamentStarted: true,
        playerCounter: initial.playerCounter,
        playerNumberError: false,
    };
};

//used if an incorrect number of players (i.e not a power of 2) are attempted to be submitted
const playerNumberError = state => {
    return {
        ...state,
        playerNumberError: true,
    };
};

//adds the player who won their game to the players array ready for the next round of games if all the rounds are complete the winning players name is passed to the champion property
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
        champion: state.totalRounds === state.rounds.length ? player : null,
    };
};

//players who won their game are then added to the rounds array and the players array is emptied again, if all the rounds are complete the complete property becomes true and the tournament is over
const nextRound = (state) => {
    let updateRounds = addGameID(state.players);
    let complete = state.roundsCompleted + 1 === state.totalRounds;

    return {
        ...state,
        players: initial.players,
        rounds: [...state.rounds, updateRounds],
        roundsCompleted: state.roundsCompleted + 1,
        playerCounter: initial.playerCounter,
        complete,
    };
};

//used to reset the global state to inital, to start a new tournament
const reset = () => {
    return {
        ...initial,
    };
};


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_PLAYER": return addPlayer(state, action);
        case "START_TOURNAMENT": return startTournament(state, action);
        case "ERROR": return playerNumberError(state);
        case "PLAYER_WON": return playerWon(state, action);
        case "NEXT_ROUND": return nextRound(state);
        case "RESET": return reset();
        default: return state;
    };
};

export default reducer;

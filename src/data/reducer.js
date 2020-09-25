import initial from './initial';
import { shuffleArray } from './helperFunctions/shuffleArray';
import { addGameID } from './helperFunctions/addGameID';


//add players to the players array
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

//
const startTournament = (state, { players }) => {
    let updateRounds = state.rounds.length !== 0 ? addGameID(players) : addGameID(shuffleArray(players));
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

const playerNumberError = state => {
    return {
        ...state,
        playerNumberError: true,
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
        champion: state.totalRounds === state.rounds.length ? player : null,
    };
};

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

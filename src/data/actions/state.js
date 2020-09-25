export const addPlayer = (player) => {
    return {
        player,
        type: "ADD_PLAYER",
    };
};

export const startTournament = (players) => {
    return {
        players,
        type: "START_TOURNAMENT",
    };
};

export const playerNumberError = () => {
    return {
        type: "ERROR",
    };
};

export const playerWon = (player, roundID) => {
    return {
        player, 
        roundID,
        type: "PLAYER_WON",
    };
};

export const nextRound = () => {
    return {
        type: "NEXT_ROUND",
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};
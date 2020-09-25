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

export const playerWon = (player) => {
    return {
        player,
        type: "PLAYER_WON",
    };
};

export const nextRound = (players) => {
    return {
        players,
        type: "NEXT_ROUND",
    };
};

export const reset = () => {
    return {
        type: "RESET",
    };
};
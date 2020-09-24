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

export const playerWon = (winner, playerID) => {
    return {
        winner,
        playerID,
        type: "PLAYER_WON"
    };
};

export const nextRound = () => {
    return {
        type: "NEXT_ROUND",
    };
};
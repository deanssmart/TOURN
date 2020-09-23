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
        type: "PLAYER_WON"
    }
}
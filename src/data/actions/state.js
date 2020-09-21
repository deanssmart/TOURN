export const addPlayer = (player) => {
    return {
        player,
        type: "ADD_PLAYER",
    };
};

export const startTournament = () => {
    return {
        type: "START_TOURNAMENT",
    };
};
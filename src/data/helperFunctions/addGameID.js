//helper function to map over the players array and assign a gameID, the gameID increments after each pair is formed

export const addGameID = (players) => {
    let gameID = 0;

    return players.map((player, i) => {
		if(i % 2 === 0) {
            gameID += 1;
        } 
		return ({ ...player, gameID })
	});
};
//reduce iterator method to create a new array of games based on the gameID of the player, if the current player gameID matches the previous player gameID a game object is created with the two players, the current roundID and a new gameID (which increments on each iteration)

export const gameArrayCreator = (players) => {
	let gameID = 1;
	let previousGame = {};
	return players.reduce((games, current) => {
		if(current.gameID === previousGame.gameID) { 
			games.push({
				id: gameID,
				player1: previousGame.name,
				player2: current.name,
				roundID: current.roundID,
			})
			gameID += 1
		}
		previousGame = current;
		return games;
	}, []);
};
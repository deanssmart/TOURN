export const addGameID = (players) => {
	let gameID = 0
	return players.map((player, i) => {
		i % 2 === 0 && gameID++

		return ({ ...player, gameID })
	});
};
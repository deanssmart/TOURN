// export const gameCreator = (players) => {
//     let gameID = 0            
//     let previousGame = undefined
//     return players.reduce((games, current) => {
//         if(previousGame && current.gameID === previousGame.GameID) { 
//             games.push({
//                 gameID: gameID,
//                 p1: previousGame.name,
//                 p2: current.name,
//                 roundID: current.roundID
//             })
//             gameID += 1
//         }
//         previousGame = current
//         return games
//     }, [])
// }

export const matchCreater = (players) => {
	let matchId = 0
	let previousMatch = undefined
	return players.reduce((acc, current) => {
		if(previousMatch && current.matchId === previousMatch.matchId) { 
			acc.push({
				id: matchId,
				player1: previousMatch.name,
				player2: current.name,
				roundId: current.roundId
			})
			matchId ++
		}
		previousMatch = current
		return acc
	}, [])
}
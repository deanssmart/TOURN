import React, { Component } from "react";
import Game from '../Game';
import { matchCreater } from '../../data/helperFunctions/gameCreator';

class Round extends Component {

    render() {
        const { rounds } = this.props;
        
        return (
            <>
                {rounds.map((round, i ) => (
                    <div>
                        <h2>{`Round ${ i + 1}`}</h2>
                        <ul>
                            {matchCreater(round).map(game => 
                                <Game 
                                    key={ i }
                                    round={ round }
                                    game={ game }
                                />
                            )}
                        </ul>
                    </div>
                ))}
            </>
        )
    }
}

export default Round;

// { games.filter(game => game.round === roundNumber).map(game => (
//     <Game
//         key={ game.id }
//         game={ game }
//         // handleWin={ this.handle}
//     />
// )) }
import React, { Component } from "react";
import Game from '../Game';

class Round extends Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            progress: false,
        };
    }

    render() {
        const { games, roundNumber } = this.props;
        
        return (
            <>
            { games.filter(game => game.round === roundNumber).map(game => (
                <Game
                    key={ game.id }
                    game={ game }
                    // handleWin={ this.handle}
                />
            )) }
            </>
        )
    }
}

export default Round;


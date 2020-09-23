import React, { Component } from 'react';
import Game from '../Game';

class Tournament extends Component {

    render() {
        const { games } = this.props;

        return (
            <>
                <div>
                    {games.map((game, i) => (
                        <Game 
                            key={ i }
                            game={ `Game ${i + 1}` }
                            players={game}
                        />
                    ))}
                </div>
            </>
        );
    };
};

export default Tournament;
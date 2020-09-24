import React, { Component } from 'react';
import Game from '../Game';

class Tournament extends Component {

    
    render() {
        const { games, players } = this.props;
        // const rounds = [];
        // for(let i = 1; i <= numberORounds; i += 1){
        //     rounds[rounds.length] = ()
        // }


        return (
            <>
                <div>
                    {games.map((game, i) => (
                        <div>
                            <Game key={ i } game={ game }/>
                        </div>
                    ))}
                </div>
            </>
        );
    };
};

export default Tournament;
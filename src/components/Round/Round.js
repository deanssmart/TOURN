import React, { Component } from "react";
import Game from '../Game';
import { gameArrayCreator } from '../../data/helperFunctions/gameArrayCreator';
import Button from "../Button/Button";

class Round extends Component {
    constructor(props) {
        super(props);

        this.handleSubmitNextRound = this.handleSubmitNextRound.bind(this);

    };

    //passes the players who won their round from the players array to the rounds array 
    handleSubmitNextRound(e) {
        e.preventDefault();
        this.props.handleNextRound();
    };

    render() {
        const { rounds, totalRounds, playerCounter } = this.props;
        
        return (

            //smart title to display either, quatqrfinal, semifinal, final or round number depending on what round is being played
            <div className="container-rounds">
                {rounds.map((round, i) => (              
                    <article key={ i }>
                        <h2>{ i + 1 === totalRounds ? "Final" : i + 1 === (totalRounds - 1) ? "Semifinals" : i + 1 === (totalRounds - 2) ? "Quarterfinals" : `Round ${ i + 1 }`}</h2>         
                        <ul>
                            {/* notes can be found in helper function folder */}
                            {gameArrayCreator(round).map((game, j) => 
                                <Game 
                                    key={ j }
                                    round={ round }
                                    game={ game }
                                />
                            )}
                        </ul>
                        {/* button disabled until all games in the round are complete */}
                        <Button
                            buttonClass={ (playerCounter === (round.length / 2) ?"animated-" : "button-blue disabled-") + "button-blue game-component-blue"}
                            handleClick={ this.handleSubmitNextRound }
                            type="submit"
                            label={ i + 1 === totalRounds ? 'Tournament Master' : "Next Round" }
                            disable={ playerCounter !== (round.length / 2) } 
                        />
                    </article>                      
                ))}
            </div>
        );
    };
};

export default Round;

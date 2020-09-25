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

            //smart title to display 
            <>
                {rounds.map((round, i) => (              
                    <article key={ i }>
                        <h2>{ i + 1 === totalRounds ? "Final" : i + 1 === (totalRounds - 1) ? "Semifinals" : i + 1 === (totalRounds - 2) ? "Quarterfinals" : `Round ${ i + 1 }`}</h2>         
                        <ul>
                            {gameArrayCreator(round).map((game, j) => 
                                <Game 
                                    key={ j }
                                    round={ round }
                                    game={ game }
                                />
                            )}
                        </ul>
                        <Button
                            buttonClass="btn btn-success"
                            handleClick={ this.handleSubmitNextRound }
                            type="submit"
                            label={ i + 1 === totalRounds ? 'Show the Tronmaster' : "Next Round" }
                            disable={ playerCounter !== (round.length / 2) } 
                        />
                    </article>                      
                ))}
            </>
        );
    };
};

export default Round;

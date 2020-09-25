import React, { Component } from "react";
import Game from '../Game';
import { gameArrayCreator } from '../../data/helperFunctions/gameArrayCreator';
import Button from "../Button/Button";

class Round extends Component {
    constructor(props) {
        super(props);

        this.handleSubmitNextRound = this.handleSubmitNextRound.bind(this);
    }

    handleSubmitNextRound(e) {
        e.preventDefault();
        this.props.handleNextRound();
    }

    render() {
        const { rounds, totalRounds } = this.props;
        
        return (
            <>
                {rounds.map((round, i) => (
                    <article key={ i }>
                        <h2>{`Round ${ i + 1}`}</h2>
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
                            label={ i + 1 === totalRounds ? 'Choose the Tronmaster' : "Next Round" } 
                        />
                        <Button
                            buttonClass="btn btn-danger"
                            handleClick={ this.handleReset }
                            type="submit"
                            label="Reset"
                        />
                    </article>                      
                ))}
            </>
        )
    }
}

export default Round;

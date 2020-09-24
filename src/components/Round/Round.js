import React, { Component } from 'react';
import Button from '../Button/Button';
import Game from '../Game';

class Round extends Component {
    constructor(props) {
        super(props);

        this.handleSubmitRound = this.handleSubmitRound.bind(this);
        // this.handleSubmitComplete = this.handleSubmitComplete.bind(this);
    };
    
    handleSubmitRound(e) {
        e.preventDefault();
        this.props.handleNextRound();
    }

    render() {

        const { games, tournamentComplete, currentRound } = this.props;

        return (
            <>
            <h2>{`Round ${currentRound + 1}`}</h2>
                <div>
                    {games.map((game, i) => (
                       <Game key={ i } game={ i + 1 } players={ game }/>
                    ))}
                </div>
            <Button 
                buttonClass="btn btn-primary"
                handleClick={ this.handleSubmitRound }
                type="submit" 
                label="Next Round"
            />
            </>
        )
    }
}

export default Round;
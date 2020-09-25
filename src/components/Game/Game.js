import React, { Component } from 'react';
import Button from '../Button/Button';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {winner: 0};

        this.handleP1Win = this.handleP1Win.bind(this);
        this.handleP2Win = this.handleP2Win.bind(this);
    }

    handleP1Win(player1, roundID) {
        this.props.handleWin(player1, roundID);
        this.setState({winner: 1});                
    }

    handleP2Win(player2, roundID) {
        this.props.handleWin(player2, roundID);
        this.setState({winner: 2});        
    }

    // handleSubmitWin(e, player) {
    //     e.preventDefault();
    //     this.props.handleWin(player);
    // };

    render() {
        const { game, round } = this.props;

        return (
            <section>
                <h3>{ `Game ${game.id}` }</h3>
                <div>
                <Button 
                    buttonClass="btn btn-primary"
                    handleClick={() => this.handleP1Win(game.player1, game.roundID)}
                    type="button"
                    label="Won"
                />
                <p>{ game.player1 }</p>                    
                </div>
                <div>
                <Button 
                    buttonClass="btn btn-danger"
                    handleClick={() => this.handleP2Win(game.player2, game.roundID)}
                    type="button"
                    label="Won"
                />
                <p>{ game.player2 }</p>                    
                </div>
            </section>
        );
    };
};

export default Game;

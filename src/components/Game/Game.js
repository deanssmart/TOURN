import React, { Component } from 'react';
import Button from '../Button/Button';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {winner: 0};

        this.handleP1Win = this.handleP1Win.bind(this);
        this.handleP2Win = this.handleP2Win.bind(this);
    }

    //passes the clicked player to the players array ready for the next round, plays a sound effect
    handleP1Win(player1, roundID) {
        const audio = new Audio();
        audio.src = '/assets/sounds/shortBikeTurn.m4a';
        audio.play();
        this.props.handleWin(player1, roundID);
        this.setState({winner: 1});                
    };

    handleP2Win(player2, roundID) {
        const audio = new Audio();
        audio.src = '/assets/sounds/shortBikeTurn.m4a';
        audio.play();
        this.props.handleWin(player2, roundID);
        this.setState({winner: 2});        
    };

    render() {
        const { winner } = this.state;
        const { game, totalRounds } = this.props;

        return (
            <section className="container-games">
                <h3 className="game-component">{ game.roundID === totalRounds ? "This is it..." : `Game ${game.id}`}</h3>
                <div className="container-games">
                    <div className="container-player">
                        <Button 
                            buttonClass={(winner === 1 ? "animated-" : winner === 2 ? " button-blue disabled-" : "") + "button-blue game-component-blue"}
                            handleClick={() => this.handleP1Win(game.player1, game.roundID)}
                            type="button"
                            label="Won"
                            disable={ winner !== 0 }

                        />
                        <p className={(winner === 2 ? "disabled-game-component" : "") + " game-component-blue"}>{ game.player1 }</p>                    
                    </div>
                    <div className="container-player">
                        <Button 
                            buttonClass={(winner === 2 ? "animated-" : winner === 1 ? "button-yellow disabled-" : "") + "button-yellow game-component-yellow"}
                            handleClick={() => this.handleP2Win(game.player2, game.roundID)}
                            type="button"
                            label="Won"
                            disable={ winner !== 0 }
                        />
                        <p className={(winner === 1 ? "disabled-game-component" : "") + " game-component-yellow"}>{ game.player2 }</p>                    
                    </div>
                </div>
            </section>
        );
    };
};

export default Game;
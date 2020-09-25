import React, { Component } from 'react';
import Button from '../Button/Button';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {winner: 0};

        this.handleP1Win = this.handleP1Win.bind(this);
        this.handleP2Win = this.handleP2Win.bind(this);
    }

    //passes the clicked player to the players array ready for the next round
    handleP1Win(player1, roundID) {
        this.props.handleWin(player1, roundID);
        this.setState({winner: 1});                
    }

    handleP2Win(player2, roundID) {
        this.props.handleWin(player2, roundID);
        this.setState({winner: 2});        
    }

    render() {
        const { winner } = this.state;
        const { game } = this.props;

        return (
            <section className="container-games">
                <h3>{ `Game ${game.id}` }</h3>
                <div>
                    <div className="container-player1">
                        <Button 
                            buttonClass="button-blue player"
                            handleClick={() => this.handleP1Win(game.player1, game.roundID)}
                            type="button"
                            label="Won"
                            disable={ winner !== 0 }

                        />
                        <p className="player">{ game.player1 }</p>                    
                    </div>
                    <div className="container-player2">
                        <Button 
                            buttonClass="button-yellow player"
                            handleClick={() => this.handleP2Win(game.player2, game.roundID)}
                            type="button"
                            label="Won"
                            disable={ winner !== 0 }
                        />
                        <p className="player">{ game.player2 }</p>                    
                    </div>
                </div>
            </section>
        );
    };
};

export default Game;
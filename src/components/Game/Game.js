import React, { Component } from 'react';
import Button from '../Button/Button';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {winner: 0};

        this.handleP1 = this.handleP1.bind(this);
        this.handleP2 = this.handleP2.bind(this);
    }

    handleP1() {
        this.setState({winner: 1})
    }

    handleP2() {
        this.setState({winner: 2})
    }

    // handleSubmitWin(e, player) {
    //     e.preventDefault();
    //     this.props.handleWin(player);
    // };

    render() {
        const { game, players } = this.props;
        const player1 = players.find(player => player.id === game.p1);
        const player2 = players.find(player => player.id === game.p2);

        return (
            <article>
                <h3>{ `Game ${game.id}` }</h3>
                <div>
                <Button 
                    buttonClass="btn btn-primary"
                    handleClick={this.handleP1}
                    type="button"
                    label="Won"
                />
                <p>{ player1 === undefined ? "?" : player1.name }</p>                    
                </div>
                <div>
                <Button 
                    buttonClass="btn btn-danger"
                    handleClick={this.handleP2}
                    type="button"
                    label="Won"
                />
                <p>{ player2 === undefined ? "?" : player2.name }</p>                    
                </div>
                 {/* {
                    players.map(player => (
                        <div key={ player.id }>
                            <Button 
                                buttonClass="btn btn-primary"
                                handleClick={(e) => this.handleSubmitWin(e, player)}
                                type="submit"
                                label="Won"
                            />
                            <p>{ player.name }</p>
                        </div>
                ))}  */}
            </article>
        );
    };
};

export default Game;

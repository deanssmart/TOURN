import React, { Component } from 'react';
import Button from '../Button/Button';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {winner: 0};

        this.handleP1Win = this.handleP1Win.bind(this);
        this.handleP2Win = this.handleP2Win.bind(this);
    }

    handleP1Win() {
        this.props.handleWin();
        this.setState({winner: 1});
                
    }

    handleP2Win() {
        this.props.handleWin();
        this.setState({winner: 2});
        
    }

    // handleSubmitWin(e, player) {
    //     e.preventDefault();
    //     this.props.handleWin(player);
    // };

    render() {
        const { game, round } = this.props;
        // const player1 = players.find(player => player.id === game.p1);
        // const player2 = players.find(player => player.id === game.p2);

        return (
            <article>
                <h3>{ `Game ${game.id}` }</h3>
                <div>
                <Button 
                    buttonClass="btn btn-primary"
                    handleClick={this.handleP1Win}
                    type="button"
                    label="Won"
                />
                <p>{ game.name }</p>                    
                </div>
                <div>
                <Button 
                    buttonClass="btn btn-danger"
                    handleClick={this.handleP2Win}
                    type="button"
                    label="Won"
                />
                <p>{ game.name }</p>                    
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

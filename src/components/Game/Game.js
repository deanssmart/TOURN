import React, { Component } from 'react';
import Button from '../Button/Button';

class Game extends Component {

    handleSubmitWin(e, id) {
        e.preventDefault();
        this.props.handleWin(id);
    };

    render() {
        const { game, players } = this.props;

        return (
            <article>
                <h3>{ game }</h3>
                {
                    players.map(player => (
                        <div key={ player.id }>
                            <Button 
                                buttonClass="btn btn-primary"
                                handleClick={(e) => this.handleSubmitWin(e, player.id)}
                                type="submit"
                                label="Won"
                            />
                            <p>{ player.name }</p>
                        </div>
                ))}
            </article>
        );
    };
};

export default Game;

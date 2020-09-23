import React, { Component } from 'react';
import Button from '../Button/Button';

class Tournament extends Component {

    render() {
        const { games } = this.props;

        return (
            <>
                <div>
                    {games.map((game, i) => (
                        <div>
                            <h2 key={i}>{game.i}</h2>
                        </div>
                    ))}
                </div>
            </>
        );
    };
};

export default Tournament;
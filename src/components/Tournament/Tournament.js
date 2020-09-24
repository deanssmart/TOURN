import React, { Component } from 'react';
import Round from '../Round';

class Tournament extends Component {

    
    render() {
        const { numberOfRounds } = this.props;

        const rounds = [];
        for (let i = 1; i <= numberOfRounds; i += 1) {
            rounds.push(<Round roundNumber={ i }/>)
        }
        // console.log(rounds);

        return (
            <>
                <div>
                    {rounds.map((round, i) => (
                        <div key={ i }>
                            { round }
                        </div>
                    ))}
                </div>
            </>
        );
    };
};

export default Tournament;
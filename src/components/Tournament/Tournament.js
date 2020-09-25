import React, { Component } from 'react';
import Round from '../Round';

class Tournament extends Component {

    
    render() {

        return (
                <Round />
        );
    };
};

export default Tournament;

// const rounds = [];
// for (let i = 1; i <= numberOfRounds; i += 1) {
//     rounds.push(<Round roundNumber={ i }/>)
// }
// console.log(rounds);
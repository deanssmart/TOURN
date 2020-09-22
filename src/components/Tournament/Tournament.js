import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Tournament extends Component {
    constructor(props) {
        super(props);


    };

    render() {
        const { players } = this.props;

        return (
            <>
                <form className="form-group">
                    <h2>Players</h2>
                    {
                        //map over golbal state players array and add player names to the list
                        players.length === 0 ? null :
                        <ul>
                            {players.map((player, i) => (
                                <li key={i}>{player}</li>
                            ))}
                        </ul>
                    }
                    <Button
                        label="Start"
                        buttonClass="btn btn-success"
                        type="submit"
                    />
                </form>
            </>
        );
    };
};

export default Tournament;
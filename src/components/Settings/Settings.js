import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { isPowerOf2 } from '../../data/helperFunctions/isPowerOf2';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {player: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitPlayer = this.handleSubmitPlayer.bind(this);

    };

    //controlled component, allows user to add their name  
    handleChange(e) {
        this.setState({ player: e.currentTarget.value });
    };

    //adds the player name to the global state players array
    handleSubmitPlayer(e) {
        e.preventDefault();
        const { player } = this.state;

        if(player !== "") {        
            this.props.handleAddPlayer(player);
        };

        this.setState({ player: ""});
    };

    render() {
        const { player } = this.state;
        const { players, playerNumberError } = this.props;

        console.log(isPowerOf2(1));

        return (
            <>
                <form onSubmit={this.handleSubmitPlayer} className="form-group">
                    <h2>Add a Player</h2>
                    <Input
                        label="Name"
                        name="playerName"
                        type="text"
                        value={player}
                        handleChange={this.handleChange}
                    />
                    { playerNumberError ? 
                    <p>Total number of players needs to be a power of 2 (i.e.2, 4, 8, 16, 32 ...) </p> : null }
                    <Button
                        label="Add"
                        buttonClass="btn btn-primary"
                        type="submit"
                    />
                </form>

                <article>
                    <h2>Players</h2>
                    {
                        //map over golbal state players array and add player names to the list
                        players.length === 0 ? null :
                        <ul>
                            {players.map((player, i) => (
                                <li key={i}>{player.name}</li>
                            ))}
                        </ul>
                    }
                </article>
            </>
        );
    };
};

export default Settings;
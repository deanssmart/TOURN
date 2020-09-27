import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

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

    //adds the player name to the global state players array, doesnt allow empty inputs, plays a sound effect
    handleSubmitPlayer(e) {
        e.preventDefault();
        const { player } = this.state;

        if(player !== "") {   
            const audio = new Audio();
            audio.src = '/assets/sounds/zapsplat_science_fiction_button_press_beep_44987.mp3';
            audio.play();     
            this.props.handleAddPlayer(player);
        };

        this.setState({ player: ""});
    };

    render() {
        const { player } = this.state;
        const { players, playerNumberError } = this.props;

        return (
            <>
                <form onSubmit={this.handleSubmitPlayer} className="form-group container-form">
                    <Input
                        label="Add a Player"
                        name="playerName"
                        type="text"
                        value={player}
                        handleChange={this.handleChange}
                    />
                    { playerNumberError ? 
                    <p>Total number of players needs to be a power of 2 (i.e.2, 4, 8, 16, 32 ...) </p> : null }
                    <Button
                        label="Add"
                        buttonClass="button-blue"
                        type="submit"
                    />
                </form>

                <article>
                    <h2>Players</h2>
                    {
                        //map over golbal state players array and add player names to the list
                        players.length === 0 ? null :
                        <ol>
                            {players.map((player, i) => (
                                <li key={i}>{player.name}</li>
                            ))}
                        </ol>
                    }
                </article>
            </>
        );
    };
};

export default Settings;
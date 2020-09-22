import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {player: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitPlayer = this.handleSubmitPlayer.bind(this);
        this.handleSubmitStart = this.handleSubmitStart.bind(this);

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

    //starts the tournament
    handleSubmitStart(e) {
        e.preventDefault();
        const { players } = this.props;
        this.props.handleStartTournament(players);

    };

    render() {
        const { player } = this.state;
        const { players } = this.props;

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
                    <Button
                        label="Add"
                        buttonClass="btn btn-primary"
                        type="submit"
                    />
                </form>

                <form onSubmit={this.handleSubmitStart} className="form-group">
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

export default Settings;
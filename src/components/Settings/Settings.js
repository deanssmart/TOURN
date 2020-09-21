import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {player: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        this.setState({ player: e.currentTarget.value });
    };

    handleSubmit(e) {
        e.preventDefault();
        const { player } =this.state;

        if(player !== "") {
            this.props.handleSave(player);
        }

        this.setState({ player: ""});
    }

    render() {
        const { player } = this.state;

        return (
            <form>
                <Input
                    label="Add Player"
                    name="addPlayer"
                    type="text"
                    value={player}
                    handleChange={this.handleChange}
                />
                <Button
                    label="Add"
                    buttonClass="btn btn-primary"
                    handleClick={this.handleSubmit}
                />
            </form>
        );
    };
};

export default Settings;
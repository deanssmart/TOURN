import React, { Component } from 'react';
import Button from '../Button/Button';
import { isPowerOf2 } from '../../data/helperFunctions/isPowerOf2';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.handleResetSubmit = this.handleResetSubmit.bind(this);
        this.handleStartTournamentSubmit = this.handleStartTournamentSubmit.bind(this);
        this.handleErrorSubmit = this.handleErrorSubmit.bind(this);
    
    };
    
    //used to reset global state to initial, plays sound
    handleResetSubmit(e) {
        e.preventDefault();
        const audio = new Audio();
        audio.src = '/assets/sounds/zapsplat_science_fiction_machine_power_down_55173.mp3';
        audio.play();

        this.props.handleReset();
    };

    //used to start the tournament, plays sound
    handleStartTournamentSubmit(e) {
        e.preventDefault();
        const { players } = this.props;
        const audio = new Audio();
        audio.src = '/assets/sounds/zapsplat_science_fiction_robot_power_up_surge_003_45219.mp3';
        audio.play();

        this.props.handleStartTournament(players);
    };

    //used to handle error if user tries to start tournament without the correct number of players
    handleErrorSubmit(e) {
        e.preventDefault();
        const audio = new Audio();
        audio.src = '/assets/sounds/zapsplat_science_fiction_console_error_tone_001_38432.mp3';
        audio.play();
        
        this.props.handleError();
    }

    render() {
        const { tournamentStarted, players, complete } = this.props;

        //button at footer of page changes from start tournament to new tournament once the tournament has begun
        //when starting a new tournament a check is made to ensure the number of players is valid (i.e a power of 2)
        return (
            <div className="footer">
            { tournamentStarted ?    
                <Button
                    buttonClass={complete ? "animated-button-blue" : "button-blue"}
                    handleClick={ this.handleResetSubmit }
                    type="submit"
                    label="New Tournament"
                />
                :
                <Button            
                    buttonClass="animated-button-blue"
                    handleClick={ isPowerOf2(players.length) ? this.handleStartTournamentSubmit : this.handleErrorSubmit }
                    type="submit"
                    label="Start Tournament"
                />
            }
            </div>          
        );
    };
};

export default Footer;

import React, { Component } from 'react';
import Button from '../Button/Button';

class Music extends Component {
    constructor(props) {
        super(props);

        this.state = {
            musicPlaying: true,
            music: new Audio('assets/sounds/SearchingForYou-WhiteHex.mp3'),
        };

        this.handleToggle = this.handleToggle.bind(this);

    };

    //music auto plays if the user has the option turned on otherwise the will need to press the sound button
    componentDidMount() {
        const { music } = this.state;
        music.load();
        music.autoplay = true;
    };

    handleToggle() {
        const { music, musicPlaying } = this.state;

        if(musicPlaying) {
            music.pause();
            this.setState({ musicPlaying: false });
        } else {
            music.play();
            this.setState({ musicPlaying: true });
        };
    };

    render () {
        const { musicPlaying } = this.state;

        return (
            <>
            <Button 
                buttonClass="sound-button"
                handleClick={ this.handleToggle }
                type="button"
                label={musicPlaying ? "🔊" : "🔈"}
            />
            </>
        );
    };
};

export default Music;


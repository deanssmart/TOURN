import React from 'react';
import Button from '../Button/Button';
import { isPowerOf2 } from '../../data/helperFunctions/isPowerOf2';

const Footer = ({
    players,
    tournamentStarted,
    handleReset,
    handleStartTournament,
    handleError,
}) => (

    //button at footer of page changes from start tournament to new tournament once the tournament has begun
    //whent starting a new tournament a check is made to ensure the number of playes is valid (i.e a power of 2)
        <div>
        { tournamentStarted ?    
            <Button
                buttonClass="btn btn-danger"
                handleClick={ handleReset }
                type="submit"
                label="New Tournament"
            />
            :
            <Button            
                buttonClass="btn btn-success"
                handleClick={ isPowerOf2(players.length) ? () => handleStartTournament(players) : handleError }
                type="submit"
                label="Start Tournament"
            />
        }
        </div>          
);


export default Footer;

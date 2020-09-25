import React from 'react';
import Button from '../Button/Button';

const Footer = ({
    players,
    tournamentStarted,
    handleReset,
    handleStartTournament,
}) => (
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
                handleClick={ () => handleStartTournament(players) }
                type="submit"
                label="Start Tournament"
            />
        }
        </div>          
);


export default Footer;

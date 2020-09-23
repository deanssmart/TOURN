import React, { Component } from 'react';
import Button from '../Button/Button';

class Game extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {winner: 0};

    //     this.handleP1 = this.handleP1.bind(this);
    //     this.handleP2 = this.handleP2.bind(this);
    // }

    // handleP1() {
    //     this.setState({winner: 1})
    // }

    // handleP2() {
    //     this.setState({winner: 2})
    // }

    handleSubmitWin(e, player) {
        e.preventDefault();
        this.props.handleWin(player);
    };

    render() {
        const { game, players } = this.props;

        return (
            <article>
                <h3>{ game }</h3>
                {/* <div>
                <Button 
                    buttonClass="btn btn-primary"
                    handleClick={this.handleP1}
                    type="button"
                    label="Won"
                />
                {console.log(players)}
                <p>{ players.name }</p>                    
                </div>
                <div>
                <Button 
                    buttonClass="btn btn-danger"
                    handleClick={this.handleP2}
                    type="submit"
                    label="Won"
                />
                <p>{ players.name }</p>                    
                </div> */}
                 {
                    players.map(player => (
                        <div key={ player.id }>
                            <Button 
                                buttonClass="btn btn-primary"
                                handleClick={(e) => this.handleSubmitWin(e, player)}
                                type="submit"
                                label="Won"
                            />
                            <p>{ player.name }</p>
                        </div>
                ))} 
            </article>
        );
    };
};

export default Game;

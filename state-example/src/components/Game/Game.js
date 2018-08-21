import React, { Component } from 'react';
import Form from '../Form';

class Game extends Component {
    state = {
        message: 'Make a guess',
        guesses: 0,
        randomNumber: null
    }

    max = 10

    renderCount = 0

    componentDidMount(){
        // setInterval(() => this.setRandomNumber(), 1500);
        this.setRandomNumber();
    }

    setRandomNumber(){
        this.setState({
            randomNumber: Math.floor(Math.random() * this.max)
        });
    }

    makeGuess = (e, userGuess) => {
        e.preventDefault();
        const { guesses, randomNumber } = this.state;
        let message = '';

        if(userGuess > randomNumber){
            message = 'Too High';
        } else if(userGuess < randomNumber){
            message = 'Too Low';
        } else {
            message = 'You got it'
        }

        this.setState({
            message,
            guesses: guesses + 1
        });
    }

    render(){
        console.log('Render Count:', ++this.renderCount);
        const { guesses, message } = this.state;

        return (
            <div>
                <Form guess={this.makeGuess} />
                <div className="row">
                    <h5 className="center">Guesses: {guesses}</h5>
                </div>
                <div className="row">
                    <h5 className="center">{message}</h5>
                </div>
            </div>
        )
    }
}

export default Game;

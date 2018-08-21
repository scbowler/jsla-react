import React, { Component } from 'react';

class Form extends Component {
    state = {
        userGuess: ''
    }

    submitGuess = e => {
        this.props.guess(e, this.state.userGuess);

        this.setState({userGuess: ''});
    }

    render(){
        return (
            <form onSubmit={this.submitGuess}>
                <div className="row">
                    <div className="col s4 offset-s4">
                        <input
                            className="center"
                            onChange={e => this.setState({ userGuess: e.target.value })}
                            type="number"
                            value={this.state.userGuess}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 center">
                        <button className="btn blue-grey darken-1">Make Guess</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;

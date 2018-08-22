import React, { Component } from 'react';
import { randomBackground } from '../../helpers';

class Item extends Component {
    state = {
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(0, 0, 0)'
    }

    changeColor = () => {
        this.setState(randomBackground());
    }

    render(){
        const { children, remove } = this.props;

        return (
            <li style={this.state} className="collection-item">
                <div className="row">
                    <div className="col s12">
                        <h5 className="center">{children}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4 center">
                        <button onClick={this.changeColor} className="btn white black-text">Change Color</button>
                    </div>
                    <div className="col s4">
                        <h5 className="center">{this.state.backgroundColor}</h5>
                    </div>
                    <div className="col s4 center">
                        <button onClick={remove} className="btn red">Remove</button>
                    </div>
                </div>
            </li>
        )
    }
}

export default Item;

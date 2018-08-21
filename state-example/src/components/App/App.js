import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import Game from '../Game';
// import Game2 from '../Game2';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="center">
					<h1>State Example</h1>
					<h3>Guessing Game</h3>
				</header>
				<Game/>
				{/* <Game2/> */}
			</div>
		);
	}
}

export default App;

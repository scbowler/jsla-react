import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
// import logo from '../../assets/images/logo.svg';
import List from '../List';

class App extends Component {
	render() {
		return (
			<div className="container">
				<h1 className="center">Key Demo</h1>
				<List/>
			</div>
		);
	}
}

export default App;

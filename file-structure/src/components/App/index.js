import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import Button from '../Button';

class App extends Component {
	
	render() {

		return (
			<div className="container">
				<div className="row">
					<h1 className="center">File Organization</h1>
					<div className="col s12 center">
						<Button color="blue-grey" onClick={() => console.log('Button Clicked!')} >Click Me</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

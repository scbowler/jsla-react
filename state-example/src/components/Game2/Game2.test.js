import React from 'react';
import ReactDOM from 'react-dom';
import Game2 from '.';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Game2 />, div);
    ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';

export default ({ children, color, onClick }) => (
    <button onClick={onClick} className={`btn ${color}`}>
        {children}
    </button>
);

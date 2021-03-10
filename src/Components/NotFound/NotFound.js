import React from 'react';

const NotFound = () => {
    const errorStyle = {
        color: 'lightgrey',
        textAlign: 'center',
        marginTop: '15%'
    }
    const h1Style = {
        fontSize: '51px'
    }
    return (
        <div style={errorStyle}>
            <h1 style={h1Style}>Oops!Page Not Found</h1>
            <h1 style={h1Style}>Error!!404</h1>
        </div>
    );
};

export default NotFound;
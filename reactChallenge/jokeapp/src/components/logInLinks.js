import React from 'react';
import {NavLink} from 'react-router-dom';

const LogInLinks = () => {
    return (
        <ul className="right" id="log-in-links">
            <li><NavLink to="/joke" style={{color: '#6A686B', textDecoration: 'none'}}>Crack Joke</NavLink></li>
            <li><NavLink to="/" style={{color: '#6A686B', textDecoration: 'none'}}>Log Out</NavLink></li>
        </ul>
    )
}

export default LogInLinks;
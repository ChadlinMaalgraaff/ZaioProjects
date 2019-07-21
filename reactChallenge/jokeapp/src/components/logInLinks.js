import React from 'react';
import {NavLink} from 'react-router-dom';

const LogInLinks = () => {
    return (
        <ul className="right" id="log-in-links">
            <li><NavLink to="/joke">Crack Joke</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
        </ul>
    )
}

export default LogInLinks;
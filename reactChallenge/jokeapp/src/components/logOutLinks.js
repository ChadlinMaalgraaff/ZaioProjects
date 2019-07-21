import React from 'react';
import {NavLink} from 'react-router-dom';

const LogOutLinks = () => {
    return (
        <ul className="right" id="log-out-links">
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/">Register</NavLink></li>
        </ul>
    )
}

export default LogOutLinks;
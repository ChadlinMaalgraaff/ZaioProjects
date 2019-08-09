import React from 'react';
import {NavLink} from 'react-router-dom';

const LogOutLinks = () => {
    return (
        <ul className="right" id="log-out-links">
            <li><NavLink to="/login" style={{color: '#6A686B', textDecoration: 'none'}}>Login</NavLink></li>
            <li><NavLink to="/" style={{color: '#6A686B', textDecoration: 'none'}}>Register</NavLink></li>
        </ul>
    )
}

export default LogOutLinks;
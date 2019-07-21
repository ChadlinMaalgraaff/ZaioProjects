import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import LogInLinks from './logInLinks';
import LogOutLinks from './logOutLinks';

const NavBar = () => {
    return(
        <div className="navbar" id='navigator'>
            <nav className="nav-wrapper">
                <div className="container">
                <Link to="/home" className="Home"></Link>
                <LogInLinks />
                <LogOutLinks />
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
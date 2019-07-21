import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class LoggedIn extends Component {

    componentDidMount() {
        var logoutlink = document.getElementById("log-out-links");
        var loginLink = document.getElementById("log-in-links");

        loginLink.style.display = 'block';
        logoutlink.style.display = 'none'; 
    }

    handleClick = (e) => {
        console.log('Play clicked');

    }

    render() {
        return (
            <div>    
                <div className="center" id="joke-text">
                    <p className="center">JOKE TEXT HERE</p>
                </div>
                <div id="play-icon" className="center">
                    <img src="https://cdn0.iconfinder.com/data/icons/pack-web-app-game/512/play-button-512.png" className="center" id="play" onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default withRouter(LoggedIn); 
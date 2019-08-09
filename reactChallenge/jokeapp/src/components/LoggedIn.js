import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class LoggedIn extends Component {
    state = {
        allJokes: [{ id: 1, joke: 'Fetching a dad joke'}]
    }

    componentDidMount() {
        var logoutlink = document.getElementById("log-out-links");
        var loginLink = document.getElementById("log-in-links");

        loginLink.style.display = 'block';
        logoutlink.style.display = 'none'; 
    }

    handleClick = (e) => {
        console.log('Play clicked');
        this.fetchJokes('');
    }
    
    fetchJokes = (term) => {
        const url = (term) ? `https://icanhazdadjoke.com/search?term=${term}` : 'https://icanhazdadjoke.com/';
    
        fetch(url, { headers: { 'Accept': 'application/json' }})
          .then(response => response.text()).then(body => {
            const jokes = JSON.parse(body);
            var jokeText = document.getElementById("joke-text");
            jokeText.innerHTML = jokes.joke;

          })
    }

    render() {
        return (
            <div>    
                <div className="center" id="joke-text">
                    <p className="center" id="joke-text" style={{color: '#6A686B'}}>JOKE TEXT HERE</p>
                </div>
                <div id="play-icon" className="center">
                    <img src="https://cdn0.iconfinder.com/data/icons/pack-web-app-game/512/play-button-512.png" className="center" id="play" onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}

export default withRouter(LoggedIn); 
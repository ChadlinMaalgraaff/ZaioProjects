import React, {Component} from 'react';

class Home extends Component {

    componentDidMount() {
        var logoutlink = document.getElementById("log-out-links");
        var loginLink = document.getElementById("log-in-links");

        loginLink.style.display = 'none';
        logoutlink.style.display = 'block'; 

    }


    render() {
        return (
            <div className="home">
                <h2>You need to login to Crack Jokes!</h2>
            </div>
        )
    }
}

export default Home;
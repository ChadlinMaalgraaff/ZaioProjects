import React, { Component, PropTypes }from 'react'

class Login extends Component {

    componentDidMount() {
        var logoutlink = document.getElementById("log-out-links");
        var loginLink = document.getElementById("log-in-links");

        loginLink.style.display = 'none';
        logoutlink.style.display = 'block'; 
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var email = document.getElementById("email");
        var password = document.getElementById("password");

        switch (email.value) {
            case "joker@zaio.io":
                switch (password.value) {
                    case "zaiojoke":
                        this.props.history.push("/register");
                    break;
                    
                    default:
                        alert("Wrong password or email");
                }
            break;
            default:
                    alert("Wrong password or email");
        }
    }

    render() {
        return (
            <div className="loginform lightgray">
                <form className="lightgray" onSubmit={this.handleSubmit}>
                    <h3 className="title center" style={{color: '#6A686B'}}>Login</h3>
                    <div className="input-field">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email"/>
                    </div>
                    <div className="input-field ">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"/>
                    </div>
                    <input type="submit" id="submitbtn" onClick={this.handleSubmit}/>
                </form>
            </div>
       )
    }
}

export default Login;
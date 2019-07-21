import React, {Component} from 'react';

class SignUp extends Component {
    state = {
        array: []
    }

    handleSubmit = (e) => {
        e.preventDefault()

        var inputs = document.querySelectorAll('input');    
        var myObject = {};
        var values = [];

        for (var i = 0; i < inputs.length; i++) {
          myObject[inputs[i].id] = inputs[i].value;
        }

        if (myObject['password'] === myObject['confirmPassword']) {
            
            for (var j = 0; j < inputs.length; j++) {
                values[j] = inputs[j].value;
            }

            this.setState({
                array: values
            })

            alert('Success!')
        }else {
            alert('Passwords do not match')
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="signup">
                <div className='input-field'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id='name'/>
                </div>
                <div className='input-field'>
                    <label htmlFor="name">Surname:</label>
                    <input type="text" id='surname'/>
                </div>
                <div className='input-field'>
                    <label htmlFor="name">Age:</label>
                    <input type="Age" id='age'/>
                </div>
                <div className='input-field'>
                    <label htmlFor="name">Email:</label>
                    <input type="Email" id='email'/>
                </div>
                <div className='input-field'>
                    <label htmlFor="name">Password:</label>
                    <input type="password" id='password'/>
                </div>
                <div className='input-field'>
                    <label htmlFor="name">Confirm Password:</label>
                    <input type="password" id='confirmPassword'/>
                </div>
                <div className="input-field">
                        <button className="btn">Sign up</button>
                </div>
            </form>
        )
    }
}

export default SignUp;
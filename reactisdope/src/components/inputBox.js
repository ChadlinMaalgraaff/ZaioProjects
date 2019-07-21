import React, {Component} from 'react';

class InputBox extends Component {
    handleChange = (e) => {
        this.props.addName(e.target.value);
    }

    render() {
        return (
            <div className='form'>
                <form>
                    <div className='input-field'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id='input' onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default InputBox;
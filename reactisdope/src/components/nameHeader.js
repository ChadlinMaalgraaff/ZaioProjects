import React, {Component} from 'react';
import InputBox from './inputBox';

class NameHeader extends Component {
    state = {
        name:''
    }

    addName = (Box) => {
        let names = Box;
        this.setState({
            name:names
        })
    }

    render() {
        return (
            <div>
                <h2 id='header'>{this.state.name}</h2>
                <InputBox addName={this.addName}/>
            </div>
        )
    }
}

export default NameHeader;
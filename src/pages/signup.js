import React, { Component } from 'react';
import Signup from '../components/Form/Signup';

class signup extends Component {
    render() {
        return (
            <Signup history={ this.props.history } />
        )
    }
}

export default signup;



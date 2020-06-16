import React, { Component } from 'react';
import Login from '../components/Form/Login';

class login extends Component {
    render() {
        return (
            <Login history={ this.props.history }/>
        )
    }
}

export default login;



import React, { Component } from 'react'
import Login from './Login';

export default class LoginContainer extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = (e) => {
        alert("submit");
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return (
            <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit}>
                
            </Login>
        )
    }
}

import React, { Component } from 'react'
import Login from './Login';

// Validation
import { validateEmail, validatePassword } from '../../../utils/FormValidation';

export default class LoginContainer extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            }
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const emailError = validateEmail('Email', this.state.email);
        const passwordError = validatePassword('Password', this.state.password);
        this.setState({errors: {email: emailError, password: passwordError}});
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    componentDidMount() {
        document.getElementById("email").focus();
    }

    render() {
        return (
            <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} errors={this.state.errors}>
                
            </Login>
        )
    }
}

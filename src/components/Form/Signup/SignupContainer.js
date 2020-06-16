import React, { Component } from 'react'
import Signup from './Signup';

export default class SignupContainer extends Component {
    constructor() {
        super();
        this.state = {
            step: 1,
            email: '',
            password: '',
            passwordVerify: '',
            fullName: '',
            displayName: '',
            dateOfBirth: '',
            adress: '',
            city: '',
            country: '',
            phone: ''
        };
    }

    handleForward = () => {
        this.setState(state => {
            return {step: state.step + 1};
        });
    }

    handleBack = () => {
        this.setState(state => {
            return {step: state.step - 1};
        });
    }

    handleSubmit = (event) => {
        alert("submit");
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <Signup {...this.state} handleChange={this.handleChange} handleForward={this.handleForward} handleBack={this.handleBack}>
                
            </Signup>
        )
    }
}

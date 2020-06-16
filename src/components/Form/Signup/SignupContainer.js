import React, { Component } from 'react'
import Signup from './Signup';

export default class SignupContainer extends Component {
    constructor() {
        super();
        this.state = {
            changeFocus: true,
            stepCount: 1,
            email: '',
            password: '',
            passwordVerify: '',
            fullName: '',
            username: '',
            dateOfBirth: '',
            adress: '',
            city: '',
            country: '',
            phone: ''
        };
    }

    handleForward = event => {
        event.preventDefault();
        this.setState(state => {
            return { 
                stepCount: state.stepCount + 1, 
                changeFocus: true 
            };
        });
    }

    handleBack = event => {
        event.preventDefault();
        this.setState(state => {
            return { 
                stepCount: state.stepCount - 1, 
                changeFocus: true 
            };
        });
    }

    handleFocus = () => {
        switch(this.state.stepCount) {
            case 1:
                document.getElementById('email').focus();
                break;
            case 2:
                document.getElementById('username').focus();
                break;
            case 3:
                document.getElementById('address').focus();
                break;
            default:
                document.getElementById('email').focus();
        }
    }

    handleSignup = event => {
        event.preventDefault();
        alert("submit");
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    componentDidMount = () => {
        this.handleFocus();
    }

    componentDidUpdate = () => {
        const changeFocus = this.state.changeFocus;
        if(changeFocus){
            this.handleFocus();
            this.setState({ changeFocus: false });
        }
    }

    render() {
        return (
            <Signup 
                {...this.state} 
                onInputChange={ this.handleChange } 
                onForward={ this.handleForward } 
                onBack={ this.handleBack } 
                onSignup={ this.handleSignup }
            />
        )
    }
}

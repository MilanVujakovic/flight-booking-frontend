import React, { Component } from 'react'
import Login from './Login';
import propTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/actions/userActions';
import { clearErrors } from '../../../redux/actions/uiActions';

class LoginContainer extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
    }

    handleLogin = (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        const user = {
            email,
            password
        }

        const { history } = this.props;
        this.props.loginUser(user, history);
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

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        return (
            <Login onChange={this.handleChange} onLogin={this.handleLogin} errors={ this.props.UI.errors }>
                
            </Login>
        )
    }
}

LoginContainer.propTypes = {
    loginUser: propTypes.func.isRequired,
    clearErrors: propTypes.func.isRequired,
    user: propTypes.object.isRequired,
    UI: propTypes.object.isRequired,
    history: propTypes.object.isRequired
};

const mapStateToProps = state => ({
    user: state.user,
    UI: state.UI
});

const mapActionsToProps = {
    loginUser,
    clearErrors
}

export default connect(mapStateToProps, mapActionsToProps)(LoginContainer)
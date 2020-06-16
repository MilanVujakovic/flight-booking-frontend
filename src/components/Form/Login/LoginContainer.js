import React, { Component } from 'react'
import Login from './Login';
import propTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/actions/userActions';

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

    render() {
        return (
            <Login onChange={this.handleChange} onLogin={this.handleLogin} errors={ this.props.user.errors }>
                
            </Login>
        )
    }
}

LoginContainer.propTypes = {
    loginUser: propTypes.func.isRequired,
    user: propTypes.object.isRequired
};

const mapsStateToProps = (state) => ({
    user: state.user
});

const mapActionsToProps = {
    loginUser
}

export default connect(mapsStateToProps, mapActionsToProps)(LoginContainer)
import React, {Component} from 'react';
import Header from './Header';
import propTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { checkUser, logoutUser } from '../../redux/actions/userActions';

class HeaderContainer extends Component {
    constructor() {
        super();
        this.dropdownMenu = React.createRef();
        this.state = {
            isOpen: false
        }
    }

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);

        this.props.checkUser();

    }
    
    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleDropdownToggle = () => {
        this.setState(state => ({
            isOpen: !state.isOpen
        }));
    }

    handleClickOutside = event => {
        if(this.dropdownMenu.current && !this.dropdownMenu.current.contains(event.target)) {
            this.setState({ isOpen: false });
        }
    }

    handleLogout = () => {
        this.props.logoutUser();
    }

    render() {
        return <Header 
                    isAuthenticated={ this.props.isAuthenticated }
                    onLogout={ this.handleLogout }
                    onDropdownToggle={ this.handleDropdownToggle }
                    isOpen={ this.state.isOpen }
                    dropdownRef={ this.dropdownMenu }
                />;
    }
}

HeaderContainer.propTypes = {
    isAuthenticated: propTypes.bool,
    logoutUser: propTypes.func.isRequired,
    checkUser: propTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.user.isAuthenticated
});

const mapActionsToProps = {
    checkUser,
    logoutUser
}

export default connect(mapStateToProps, mapActionsToProps)(HeaderContainer);
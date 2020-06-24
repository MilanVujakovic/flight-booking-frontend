import React, { Component } from 'react'
import Signup from './Signup';
import propTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { setErrors, clearErrors } from '../../../redux/actions/uiActions';
import { signupUser } from '../../../redux/actions/userActions';
// Validation
import { validateSignupForm } from '../../../utils/FormValidation';



const FORM_LAST_STEP = 3;

class SignupContainer extends Component {
    constructor() {
        super();
        this.state = {
            changeFocus: true,
            pastStep: 0,
            stepNumber: 2,
            step1: {
                email: '',
                password: ''
            },
            step2: {
                fullName: '',
                username: '',
                dobDay: '',
                dobMonth: '',
                dobYear: ''
            },
            step3: {
                streetAddress: '',
                city: '',
                postalCode: '',
                country: '',
                phone: ''
            }
        };
    }

    handleForward = event => {
        event.preventDefault();
        const { isValid, errors } = validateSignupForm(this.state[`step${this.state.stepNumber}`], this.state.stepNumber);
        if(isValid) {
            if(this.state.stepNumber === FORM_LAST_STEP) {
                const { step1, step2, step3 } = this.state;
                const dateOfBirth = new Date(step2.dobYear, step2.dobMonth, step2.dobDay);
                const { history } = this.props;
                const userData = {
                    ...step1,
                    ...step3,
                    fullName: step2.fullName,
                    username: step2.username,
                    dateOfBirth: dateOfBirth
                }
                this.props.signupUser(userData, history);
            } else {
                this.setState(state => {
                    return { 
                        stepNumber: state.stepNumber + 1,
                        pastStep: state.stepNumber, 
                        changeFocus: true 
                    };
                });
            }
            this.props.clearErrors();
        } else {
            this.props.setErrors(errors);
        }
    }

    handleBack = event => {
        event.preventDefault();
        this.setState(state => {
            return { 
                stepNumber: state.stepNumber - 1,
                pastStep: state.stepNumber,  
                changeFocus: true 
            };
        });
    }

    handleFocus = () => {
        switch(this.state.stepNumber) {
            case 1:
                document.getElementById('email').focus();
                break;
            case 2:
                document.getElementById('username').focus();
                break;
            case 3:
                document.getElementById('streetAddress').focus();
                break;
            default:
                document.getElementById('email').focus();
        }
    }

    handleChange = event => {
        const state = `step${this.state.stepNumber}`;
        this.setState({
            [state]: {
                ...this.state[state],
                [event.target.id]: event.target.value
            }
        });
    }

    handleAutocompleteChange = (event, value) => {
        const target = (event.target.id).split('-')[0];
        const state = `step${this.state.stepNumber}`;
        this.setState({
            [state]: {
                ...this.state[state],
                [target]: value
            }
        });
    }

    componentDidMount = () => {
        this.handleFocus();
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    componentDidUpdate = () => {
        const changeFocus = this.state.changeFocus;
        if(changeFocus){
            this.handleFocus();
            this.setState({ changeFocus: false });
        }
    }

    render() {
        const { stepNumber, pastStep } = this.state;
        return (
            <Signup
                stepNumber={ stepNumber}
                pastStep = { pastStep } 
                { ...this.state[this.state.stepNumber] } 
                onInputChange={ this.handleChange }
                onAutocompleteChange= { this.handleAutocompleteChange } 
                onForward={ this.handleForward } 
                onBack={ this.handleBack }
                errors={ this.props.UI.errors }
            />
        )
    }
}

SignupContainer.propTypes = {
    setErrors: propTypes.func.isRequired,
    clearErrors: propTypes.func.isRequired,
    UI: propTypes.object.isRequired,
    history: propTypes.object.isRequired
};

const mapStateToProps = state => ({
    UI: state.UI
});

const mapActionsToProps = {
    setErrors,
    clearErrors,
    signupUser
};

export default connect(mapStateToProps, mapActionsToProps)(SignupContainer);
import React from 'react';
import styles from './Signup.module.scss';
import ProgressLine, { ProgressLineItem } from './ProgressLine';
import MultiStepForm, { FormStep } from '../MultiStepForm';
import { InputLabel, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { dayOptions, monthOptions, yearOptions, countryOptions } from '../../../utils/AutocompleteConsts';
import propTypes from 'prop-types';

function Signup(props) {

    const { stepNumber, pastStep } = props;

    const formProgressLine = (
        <ProgressLine>
            <ProgressLineItem title="Account Info" advance />
            <ProgressLineItem title="Personal Info" advance={ stepNumber > 1 && true } retreat={ pastStep === 2 && true } />
            <ProgressLineItem title="Contact Info" advance={ stepNumber > 2 && true } retreat={ pastStep === 3 && true } />
        </ProgressLine>
    );

    return (
        <div className={styles["form-page"]}>
            <MultiStepForm progressLine={ formProgressLine } className={ styles.multiForm } showStep={ stepNumber } >
                <AccountInfo { ...props } />
                <PersonalInfo { ...props } />
                <ContactInfo { ...props } />
            </MultiStepForm>
        </div>
    );
}

const AccountInfo = props => {
    const { onInputChange, onForward, email, password, errors } = props;

    return (
        <FormStep forwardText="Personal" onForward={ onForward }>
            <span className={ styles.stepTitle }>Account Information</span>
            <TextField 
                label="Email" 
                name="email" 
                type="email" 
                id="email" 
                error={ errors.email ? true : false }
                helperText={ errors.email }
                value={ email } 
                onChange={ onInputChange }
                inputProps={{ maxLength: 64 }}
                fullWidth
                required
            />
            <TextField 
                label="Password" 
                name="password" 
                type="password" 
                id="password" 
                error={ errors.password ? true : false }
                helperText={ errors.password }
                value={ password } 
                onChange={ onInputChange }
                inputProps={{ maxLength: 64 }}
                fullWidth
                required 
            />
        </FormStep>
    );
};

const PersonalInfo = props => {
    const { onBack, onForward, onInputChange, onAutocompleteChange, username, fullName, dobDay, dobMonth, dobYear, errors } = props;
    
    return (
        <FormStep backText="Account" onBack={ onBack } forwardText="Contact" onForward={ onForward }>
            <span className={ styles.stepTitle }>Personal Information</span>
            <TextField 
                label="Username" 
                name="username" 
                type="text" 
                id="username"
                error={ errors.username ? true : false }
                helperText={ errors.username } 
                value={username} 
                onChange={ onInputChange }
                inputProps={{ maxLength: 64 }}
                fullWidth
                required 
            />
            <TextField 
                label="Full Name" 
                name="fullName" 
                type="text" 
                id="fullName"
                error={ errors.fullName ? true : false }
                helperText={ errors.fullName }  
                value={fullName} 
                onChange={ onInputChange }
                inputProps={{ maxLength: 64 }}
                fullWidth
                required 
            />
            <div className={ styles.dateOfBirthContainer }>
                <InputLabel>Date of Birth *</InputLabel>
                <div className={ styles.dateOfBirth }>
                    <Autocomplete
                        id="dobDay"
                        value = { dobDay === '' ? null : dobDay }
                        options={ dayOptions() }
                        style={{ flex: 0.4 }}
                        renderInput={ (params) => <TextField {...params} error={ errors.dobDay ? true : false } helperText={ errors.dobDay }  label="Day" /> }
                        onChange={ onAutocompleteChange }
                        disableClearable
                        autoHighlight
                    />
                    <Autocomplete
                        id="dobMonth"
                        value={ dobMonth === '' ? null : dobMonth }
                        options={ monthOptions }
                        style={{ flex: 0.7, marginLeft: '1rem' }}
                        renderInput={ (params) => <TextField {...params} error={ errors.dobMonth ? true : false } helperText={ errors.dobMonth } label="Month" /> }
                        onChange={ onAutocompleteChange }
                        disableClearable
                        autoHighlight
                    />
                    <Autocomplete
                        id="dobYear"
                        value={ dobYear === '' ? null : dobYear }
                        options={ yearOptions() }
                        style={{ flex: 0.5, marginLeft: '1rem' }}
                        renderInput={ (params) => <TextField {...params} error={ errors.dobYear ? true : false } helperText={ errors.dobYear } label="Year" /> }
                        onChange={ onAutocompleteChange }
                        disableClearable
                        autoHighlight
                    />
                </div>
            </div>
            
        </FormStep>
    );
};

const ContactInfo = props => {
    const { onBack, onForward, onInputChange, onAutocompleteChange, streetAddress, city, postalCode, country, phone, errors } = props;
    return (
        <FormStep backText="Contact" onBack={ onBack } forwardText="Sign up" onForward={ onForward }>
            <span className={ styles.stepTitle }>Contact Information</span>
            <TextField 
                label="Street Address" 
                name="streetAddress" 
                type="text" 
                id="streetAddress"
                error={ errors.streetAddress ? true : false }
                helperText={ errors.streetAddress }  
                value={ streetAddress } 
                onChange={ onInputChange }
                inputProps={{ maxLength: 64 }}
                fullWidth
                required 
            />
            
            <div style={{ display: 'flex' }}>
                <TextField 
                    label="City" 
                    name="city" 
                    type="text" 
                    id="city"
                    error={ errors.city ? true : false }
                    helperText={ errors.city }  
                    value={ city } 
                    onChange={ onInputChange }
                    inputProps={{ maxLength: 64 }}
                    fullWidth
                    required 
                />
                <TextField 
                    style={{ marginLeft: '1rem', whiteSpace: 'nowrap' }}
                    label="Postal / Zip code" 
                    name="postalCode" 
                    type="text" 
                    id="postalCode"
                    error={ errors.postalCode ? true : false }
                    helperText={ errors.postalCode }  
                    value={ postalCode } 
                    onChange={ onInputChange }
                    inputProps={{ maxLength: 16 }}
                    fullWidth
                    required 
                />
            </div>
            <Autocomplete 
                name="country"
                id="country"
                value={ country === '' ? null : country } 
                onChange={ onAutocompleteChange }
                options={ countryOptions.map(option => option.label) }
                renderInput={ (params) => <TextField {...params} error={ errors.country ? true : false } helperText={ errors.country } label="Country" required/> }
                fullWidth
                autoHighlight 
                disableClearable
            />
            <TextField 
                label="Phone Number" 
                name="phoneNumber" 
                type="tel" 
                id="phone"
                error={ errors.phone ? true : false }
                helperText={ errors.phone }  
                value={phone} 
                onChange={ onInputChange }
                inputProps={{ maxLength: 64 }}
                fullWidth
                required 
            />
        </FormStep> 
    );
};

Signup.propTypes = {
    stepNumber: propTypes.number.isRequired,
    pastStep: propTypes.number.isRequired
}

AccountInfo.propTypes = {
    onInputChange: propTypes.func.isRequired,
    onForward: propTypes.func.isRequired,
    email: propTypes.string,
    password: propTypes.string,
    errors: propTypes.object
}

PersonalInfo.propTypes = {
    onInputChange: propTypes.func.isRequired,
    onBack: propTypes.func.isRequired,
    onForward: propTypes.func.isRequired,
    onAutocompleteChange: propTypes.func.isRequired,
    username: propTypes.string,
    fullName: propTypes.string,
    dobDay: propTypes.string,
    dobMonth: propTypes.string,
    dobYear: propTypes.string,
    errors: propTypes.object
}

ContactInfo.propTypes = {
    onInputChange: propTypes.func.isRequired,
    onBack: propTypes.func.isRequired,
    onForward: propTypes.func.isRequired,
    onAutocompleteChange: propTypes.func.isRequired,
    streetAddress: propTypes.string,
    city: propTypes.string,
    postalCode: propTypes.string,
    country: propTypes.string,
    phone: propTypes.string,
    errors: propTypes.object
}

export default Signup;

import React from 'react';
import styles from './Signup.module.scss';
import Input from '../../Input';
import Button from '../../Button';
import ProgressLine, { ProgressLineItem } from './ProgressLine';

function Signup(props) {

    const { stepCount } = props;
    let step;
    switch(stepCount) {
        case 1:
            /* --- Account Information --- */
            step = <AccountInfo { ...props } />
            break;
        case 2:
            /* --- Personal Information --- */
            step = <PersonalInfo { ...props } />
            break;
        case 3:
            /*Contact Information*/
            step = <ContactInfo { ...props } />
            break;
        default:
            step = undefined;
    }

    return (
        <div className={styles["form-page"]}>
            <ProgressLine>
                <ProgressLineItem title="Account Info" advance={ stepCount > 0 && true } />
                <ProgressLineItem title="Personal Info" advance={ stepCount > 1 && true } />
                <ProgressLineItem title="Contact Info" advance={ stepCount > 2 && true } />
            </ProgressLine>
            { step }
        </div>
    );
}

const AccountInfo = props => {
    const { onInputChange, onForward } = props;

    return (
        <FormStep forwardText="Personal" onForward={ onForward }>
            <span className={ styles.stepTitle }>Account Information</span>
            <Input 
                label="Email" 
                name="email" 
                type="email" 
                id="email" 
                value={props.email} 
                onChange={ onInputChange } 
                required
            />
            <Input 
                label="Password" 
                name="password" 
                type="password" 
                id="password" 
                value={ props.password } 
                onChange={ onInputChange }
                required 
            />
            <Input 
                label="Verify Password" 
                name="verifyPassword" 
                type="password" 
                id="passwordVerify" 
                value={ props.passwordVerify } 
                onChange={ onInputChange } 
                required 
            />
        </FormStep>
    );
};

const PersonalInfo = props => {
    const { onBack, onForward, onInputChange } = props;
    return (
        <FormStep backText="Account" onBack={ onBack } forwardText="Contact" onForward={ onForward }>
            <span className={ styles.stepTitle }>Personal Information</span>
            <Input 
                label="Username" 
                name="username" 
                type="text" 
                id="username" 
                value={props.username} 
                onChange={ onInputChange } 
                required 
            />
            <Input 
                label="Full Name" 
                name="fullName" 
                type="text" 
                id="fullName" 
                value={props.fullName} 
                onChange={ onInputChange } 
                required 
            />
            <Input 
                label="Date Of Birth" 
                name="dateOfBirth" 
                type="text" 
                id="dateOfBirth" 
                value={props.dateOfBirth} 
                onChange={ onInputChange } 
                required 
            />
        </FormStep>
    );
};

const ContactInfo = props => {
    const { onBack, onSignup, onInputChange } = props;
    return (
        <FormStep backText="Contact" onBack={ onBack } forwardText="Sign up" onForward={ onSignup }>
            <span className={ styles.stepTitle }>Contact Information</span>
            <Input 
                label="Address" 
                name="address" 
                type="text" 
                id="address" 
                value={props.adress} 
                onChange={ onInputChange } 
                required 
            />
            <Input 
                label="City" 
                name="city" 
                type="text" 
                id="city" 
                value={props.city} 
                onChange={ onInputChange } 
                required 
            />
            <Input 
                label="Country" 
                name="country" 
                type="text" 
                id="country" 
                value={props.country} 
                onChange={ onInputChange } 
                required 
            />
            <Input 
                label="Phone Number" 
                name="phoneNumber" 
                type="tel" 
                id="phone" 
                value={props.phone} 
                onChange={ onInputChange } 
                required 
            />
        </FormStep> 
    );
};

const FormStep = props => {
    const { backText, onBack, forwardText, onForward } = props;
    const hasBack = backText ? true : false;
    return (
        <form method="POST" className={styles["form"]} noValidate>
            <div className={styles["step-page"]}>
                {/* --- Inputs --- */}
                { props.children }
            </div>
            
            <div className={styles["progress-bar"]}>
                {
                    hasBack && 
                    <Button type="primaryOutlinedButton" onClick={ onBack }>
                        { backText }
                    </Button>
                }
                
                <Button type="primaryButton" size={ hasBack || 'wide'} onClick={ onForward }>
                    { forwardText }
                </Button>
            </div>
        </form>
    )
};

export default Signup;

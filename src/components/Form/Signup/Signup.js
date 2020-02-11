import React from 'react';
import styles from './Signup.module.scss';
import Input from '../../Input';
import Button from '../../Button';

function Signup(props) {


    if(props.step === 1) {
        /*Account Information*/
        return (
            <div className={styles["form-page"]}>
                <div className={styles["form"]}>
                    <h2>SIGN UP FORM</h2>
                    <div className={styles["step-page"]}>
                        <h3>Account</h3>
                            <Input name="Email" type="email" id="email" value={props.email} onChange={props.handleChange} required="required"/>
                            <Input name="Password" type="password" id="password" value={props.password} onChange={props.handleChange} required="required"/>
                            <Input name="Verify Password" type="password" id="passwordVerify" value={props.passwordVerify} onChange={props.handleChange} required="required"/>
                    </div>
                    <div className={styles["progress-bar"]}>
                        <div><Button type="secondary-primary-wide-button" onClick={props.handleForward}>Personal →</Button></div>
                    </div>
                </div>
            </div>
        );
    }  else if(props.step === 2) {
        /*Personal Information*/
        return (
            <div className={styles["form-page"]}>
                <div className={styles["form"]}>
                    <h2>SIGN UP FORM</h2>
                    <div className={styles["step-page"]}>
                        <h3>Personal</h3>
                            <Input name="Full Name" type="text" id="fullName" value={props.fullName} onChange={props.handleChange} required="required"/>
                            <Input name="Display Name" type="text" id="displayName" value={props.displayName} onChange={props.handleChange} required="required"/>
                            <Input name="Date of Birth" type="text" id="dateOfBirth" value={props.dateOfBirth} onChange={props.handleChange} required="required"/>
                    </div>
                    <div className={styles["progress-bar"]}>
                        <div><Button type="secondary-primary-button" onClick={props.handleBack}>← Account</Button></div>
                        <div><Button type="secondary-primary-button" onClick={props.handleForward}>Contact →</Button></div>
                    </div>
                </div>
            </div>
        );
    } else {
        /*Contact Information*/
        return (
            <div className={styles["form-page"]}>
                <div className={styles["form"]}>
                    <h2>SIGN UP FORM</h2>
                    <div className={styles["step-page"]}>
                        <h3>Contact</h3>
                            <Input name="Adress" type="text" id="adress" value={props.adress} onChange={props.handleChange} required="required"/>
                            <Input name="City" type="text" id="city" value={props.city} onChange={props.handleChange} required="required"/>
                            <Input name="Country" type="text" id="country" value={props.country} onChange={props.handleChange} required="required"/>
                            <Input name="Phone Number" type="tel" id="phone" value={props.phone} onChange={props.handleChange} required="required"/>
                    </div>
                    <div className={styles["progress-bar"]}>
                        <div><Button type="secondary-primary-button" onClick={props.handleBack}>← Contact</Button></div>
                        <div><Button type="secondary-primary-wide-button">Sign up</Button></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;

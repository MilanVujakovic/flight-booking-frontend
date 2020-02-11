import React from 'react';
import styles from './Login.module.scss';
import Input from '../../Input';
import Button from "../../Button";

const Login = props => (
    <div className={styles["form-page"]}>
        <div className={styles["form"]}>
            <h2>LOGIN</h2>
            
            <div className={styles["step-page"]}>
                    <Input name="Email" type="email" id="email" onChange={props.handleChange} required="required"/>
                    <Input name="Password" type="password" id="password" onChange={props.handleChange} required="required"/>
            </div>

            {/* Sign up progress and button */}
            <div className={styles["progress-bar"]}>
            <Button type="secondary-primary-wide-button" onClick={props.handleSubmit}>Login</Button>
            </div>
        </div>
    </div>
);

export default Login;

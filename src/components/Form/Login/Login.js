import React from 'react';
import styles from './Login.module.scss';
import Input from '../../Input';
import Button from '../../Button';

const Login = props => (
    <div className={styles["form-page"]}>
        <form method='POST' className={styles["form"]}>
            
            <div className={styles["step-page"]}>
                    <Input name="email" type="email" id="email" onChange={props.handleChange} required="required" />
                    <Input name="password" type="password" id="password" onChange={props.handleChange} required="required"/>
                    <div className={styles["in-line"]}>
                        <div>
                            <input type="checkbox" id="rememberMe" name="rememberMe"/>
                            <label for='rememberMe'>Remember me</label>
                        </div>
                        <a href="/">Forgot password?</a>
                    </div>
            </div>

            <div className={styles["progress-bar"]}>
                <Button type="primary-button" onClick={props.handleSubmit}>Login</Button>
            </div>

            <div className={styles["divider"]}/>
            <div className={styles["in-line"]}>
                <span>Don't have an account?</span>
                <a href="/sign-up">Sign up</a>
            </div>
        </form>
    </div>
);

export default Login;

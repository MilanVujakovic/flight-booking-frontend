import React from 'react';
import styles from './Login.module.scss';
import Input from '../../Input';
import Button from '../../Button';
import { Link } from 'react-router-dom';

const Login = props => {
    const  { onChange, errors, onLogin, isAuthenticating } = props;
    const { email, password } = errors;
    return (
        <div className={styles["form-page"]}>
            <form method='POST' className={styles["form"]}>
                
                <div className={styles["step-page"]}>
                        <Input
                            name="email"
                            type="email" 
                            id="email" 
                            onChange={onChange}
                            error={email} 
                            required="required" 
                        />
                        <Input 
                            name="password" 
                            type="password" 
                            id="password" 
                            onChange={onChange} 
                            error={password}
                            required="required"
                        />
                        <div className={styles["in-line"]}>
                            <div>
                                <input type="checkbox" id="rememberMe" name="rememberMe"/>
                                <label htmlFor="rememberMe">Remember me</label>
                            </div>
                            <a href="/">Forgot password?</a>
                        </div>
                </div>

                <div className={styles["progress-bar"]}>
                    <Button type="primary-button" onClick={ onLogin } disabled={isAuthenticating}>Login</Button>
                </div>

                <div className={styles["divider"]}/>
                <div className={styles["in-line"]}>
                    <span>Don't have an account?</span>
                    <Link to="/sign-up">Sign up</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;

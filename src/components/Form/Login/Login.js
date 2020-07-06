import React from 'react';
import styles from './Login.module.scss';
import { TextField } from '@material-ui/core';
import Button from '../../Button';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const Login = props => {
    const  { email, password, onChange, errors, onLogin, isLoading } = props;
    return (
        <div className={styles["form-page"]}>
            <form method='POST' className={`${ styles.form } ${ styles.loginForm }`}>
                
                <div className={styles["step-page"]}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email" 
                            id="email"
                            value={ email }
                            onChange={ onChange }
                            error={ errors.email ? true : false }
                            helperText={ errors.email || '' }
                            inputProps={{ maxLength: 64 }}
                            fullWidth
                            autoFocus 
                            required
                        />
                        <TextField 
                            label="Password"
                            name="password" 
                            type="password" 
                            id="password"
                            value={ password }
                            onChange={ onChange } 
                            error={ errors.password ? true : false }
                            helperText={ errors.password || '' }
                            inputProps={{ maxLength: 64 }}
                            fullWidth
                            required
                        />
                        <div className={styles.rememberMe}>
                            <div>
                                <input type="checkbox" id="rememberMe" name="rememberMe"/>
                                <label htmlFor="rememberMe">Remember me</label>
                            </div>
                            <a href="/">Forgot password?</a>
                        </div>

                    <div className={styles["progress-bar"]}>
                        <Button variant="primary" fullWidth onClick={ onLogin } disabled={ isLoading }>Login</Button>
                    </div>
                </div>

                <div className={styles.inLine}>
                    <span>Don't have an account?</span>
                    <Link to="/signup">Sign up</Link>
                </div>
            </form>
        </div>
    );
};
Login.propTypes = {
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    onLogin: propTypes.func.isRequired,
    isLoading: propTypes.bool.isRequired,
    errors: propTypes.object
}

export default Login;

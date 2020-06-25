import React from 'react';
import styles from './Button.module.scss';
import propTypes from 'prop-types';

const Button = props => {
    const { type, fullWidth, onClick, disabled } = props;
    return (
        <button 
            className={`${type === undefined ? styles.secondaryButton : styles[type]} ${ fullWidth ? styles.fullWidth : '' }`} 
            onClick={onClick}
            disabled={disabled}
            type="button"
        >
            {props.children}
        </button>
    );
};

Button.propTypes = {
    type: propTypes.string.isRequired,
    fullWidth: propTypes.bool,
    onClick: propTypes.func.isRequired,
    disabled: propTypes.bool
}

export default Button;
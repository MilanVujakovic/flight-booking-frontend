import React from 'react';
import styles from './Button.module.scss';
import propTypes from 'prop-types';

const Button = props => {
    const { variant, fullWidth, wide, onClick, disabled } = props;
    return (
        <button 
            className={ `${variant === undefined ? styles.secondaryButton : styles[variant]} ${ fullWidth ? styles.fullWidth : '' } ${ wide ? styles.wide : '' }` } 
            onClick={ onClick }
            disabled={ disabled }
            type="button"
        >
            { props.children }
        </button>
    );
};

Button.propTypes = {
    variant: propTypes.oneOf(['primary', 'secondary', 'primaryOutlined', 'secondaryOutlined', 'primaryRounded']),
    fullWidth: propTypes.bool,
    wide: propTypes.bool,
    onClick: propTypes.func.isRequired,
    disabled: propTypes.bool
}

export default Button;
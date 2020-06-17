import React from "react";
import styles from "./Button.module.scss";

const Button = props => {
    const { type, size } = props;
    return (
        <button 
            className={`${props.type === undefined ? styles.secondaryButton : styles[type]} ${ size === 'wide' && styles.wide}`} 
            onClick={props.onClick}
            disabled={props.disabled}
            type="button"
        >
            {props.children}
        </button>
    );
};

export default Button;
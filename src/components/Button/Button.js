import React from "react";
import styles from "./Button.module.scss";

const Button = props => (
    <button 
        className={styles[props.type === undefined ? "secondary-button" : props.type]} 
        onClick={props.onClick}
        disabled={props.disabled}
    >
        {props.children}
    </button>
);

export default Button;
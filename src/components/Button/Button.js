import React from "react";
import styles from "./Button.module.scss";

const Button = props => (
    <button 
        className={styles["secondary-contrast-button"]} > 

        {props.children}
    </button>
);

export default Button;
import React from "react";
import styles from "./Input.module.scss";

/**
 * Input for different types
 * @param {*} props
 * 
 * name, type, id, required
 * 
 */
const Input = props => (
  <div className={styles[props.inputWidth === undefined ? "input-div" : "input-"+props.inputWidth+"-div"]}>
    <label for={props.name} className={props.required === 'required' && styles['required']}>{props.name}</label>
    <input type={props.type} name={props.name} id={props.id} value={props.value} spellCheck="false" required={props.required} onChange={props.onChange}/>
    <div className={styles["error-message"]}><p>Error text goes here.</p></div>
  </div>
);

export default Input;

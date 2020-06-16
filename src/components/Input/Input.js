import React from "react";
import styles from "./Input.module.scss";
import propTypes from 'prop-types';

/**
 * Input for different types
 * @param {*} props
 * 
 * name, type, id, error, required, maxLength(default is 64)
 * 
 */
const Input = props => {
  return (
    <div className={styles["input-div"]}>
      <label htmlFor={props.name} className={props.required && styles['required']}>{ props.label }</label>
      <input 
        type={props.type} 
        name={props.name} 
        id={props.id} 
        value={props.value} 
        spellCheck="false" 
        maxLength={props.maxLength} 
        onChange={props.onChange}
      />
      
      {props.error.length > 0 &&
        <span className={styles["error-message"]}>{props.error}</span>}
    </div>
  );
}

Input.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  error: propTypes.string,
  maxLength: propTypes.string,
  required: propTypes.bool,
  onChange: propTypes.func
}

Input.defaultProps = {
  error: '',
  maxLength: '64'
}

export default Input;

import React from 'react'

import styles from './Form.module.scss';
import Button from '../Button';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MultiStepForm = props => {
    const { progressLine, className, showStep } = props;
    return (
        <div className={ className ? className : '' }>
            { progressLine && progressLine }
            <form method="POST" noValidate className={ styles.form }>
                { props.children[showStep - 1] }
                <div className={styles.inLine}>
                    <span>Already have an account?</span>
                    <Link to="/login">Log in</Link>
                </div>
            </form>
        </div>
    );
};

export const FormStep = props => {
    const { backText, onBack, forwardText, onForward, disableOnForward } = props;
    const hasBack = backText ? true : false;
    return (
        <div className={styles["step-page"]}>
                {/* --- Inputs --- */}
                { props.children }

            <div className={styles["progress-bar"]}>
                {
                    hasBack && 
                    <Button variant="primaryOutlined" onClick={ onBack }>
                        { backText }
                    </Button>
                }
                
                <Button variant="primary" fullWidth={ !hasBack } onClick={ onForward } disabled={ disableOnForward }>
                    { forwardText }
                </Button>
            </div>
        </div>
    )
};

MultiStepForm.propTypes = {
    progressLine: propTypes.object,
    className: propTypes.string,
    showStep: propTypes.number.isRequired
}

FormStep.propTypes = {
    backText: propTypes.string,
    onBack: propTypes.func,
    forwardText: propTypes.string.isRequired,
    onForward: propTypes.func.isRequired,
    disableOnForward: propTypes.bool
}

export default MultiStepForm;
import React from 'react'
import styles from './ProgressLine.module.scss';
import propTypes from 'prop-types';

const ProgressLine = props => {
    return (
        <div className={ styles.progressLine }>
            <ol>
                { props.children }
            </ol>
        </div>
    );
};

export const ProgressLineItem = (props) => {
    const { title, advance, retreat } = props;
    return (
        <li className={`${ advance ? styles.advance : '' } ${ retreat && !advance ? styles.retreat : '' }`}>
            <span>{ title }</span>
        </li>
    );
};

ProgressLine.propTypes = {
    children: propTypes.arrayOf(propTypes.element).isRequired
}

ProgressLineItem.propTypes = {
    title: propTypes.string.isRequired,
    advance: propTypes.bool,
    retreat: propTypes.bool
}

export default ProgressLine;
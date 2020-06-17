import React from 'react'
import styles from './ProgressLine.module.scss';

const ProgressLine = props => {
    return (
        <section className={ styles.progressLine }>
            <ol>
                { props.children }
            </ol>
        </section>
    );
};

export const ProgressLineItem = (props) => {
    const { title, advance } = props;
    return (
        <li className={ advance && styles.advance }>
            <span>{ title }</span>
        </li>
    );
};

export default ProgressLine;
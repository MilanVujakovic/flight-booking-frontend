import React from 'react';
import styles from './FlightSearch.module.scss';

import FlightSearchItem from './FlightSearchItem';
import Button from '../Button';
import propTypes from 'prop-types';

const FlightSearch = props => {
    const { searchType, onSearchTypeChange, onSearch } = props;
    return (
    <div className={ styles.searchBackImage }>
        <div>
            <h1>Flight search</h1>
        </div>
        <div className={styles.search}>
            {/* Flight search type */}
            <div className={ styles.searchType }>
                <button className={ searchType === 1 ? styles.active : '' } onClick={ (e) => onSearchTypeChange(e, 1) } >One way</button>
                <button className={ searchType === 2 ? styles.active : '' } onClick={ (e) => onSearchTypeChange(e, 2) } >Return</button>
                <button className={ searchType === 3 ? styles.active : '' } onClick={ (e) => onSearchTypeChange(e, 3) } >Multi-city</button>
            </div>

            <FlightSearchItem { ...props } />

            <Button variant="secondary" onClick={ onSearch } wide >Search</Button>
        </div>
    </div>
    );
};

FlightSearch.propTypes = {
    searchType: propTypes.oneOf([1, 2, 3]).isRequired,
    onSearchTypeChange: propTypes.func.isRequired
}

export default FlightSearch;

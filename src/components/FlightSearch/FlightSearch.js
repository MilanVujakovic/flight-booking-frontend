import React from 'react';
import styles from './FlightSearch.module.scss';

import FlightSearchItem from './FlightSearchItem';
import Button from '../Button';
import propTypes from 'prop-types';
import { MAX_CITIES } from './FlightSearchContainer'; 

const FlightSearch = props => {
    const { searchType, onSearchTypeChange, onSearch, multiCity } = props;
    return (
        <div className={styles.search}>     
            <h1>Flight search</h1>
        
            {/* Flight search type */}
            <div className={ styles.searchType }>
                <button className={ searchType === 1 ? styles.active : '' } onClick={ (e) => onSearchTypeChange(e, 1) } >One way</button>
                <button className={ searchType === 2 ? styles.active : '' } onClick={ (e) => onSearchTypeChange(e, 2) } >Return</button>
                <button className={ searchType === 3 ? styles.active : '' } onClick={ (e) => onSearchTypeChange(e, 3) } >Multi-city</button>
            </div>
            <div className={ styles.searchItems }> 
            { 
                searchType === 1 && 
                    <FlightSearchItem { ...props } variant="oneWay" id={ 999 } /> 
            }

            { 
                searchType === 2 && 
                    <FlightSearchItem { ...props } variant="return" id={ 999 } /> 
            }

            { 
                searchType === 3 && <>
                    <FlightSearchItem { ...props } variant="oneWay" id={ 999 } /> 
                    { multiCity.map((item, id, arr) => 
                            <FlightSearchItem 
                                key={ id } 
                                { ...props } 
                                searchData={ item } 
                                id={ id } 
                                variant="multiCity"
                                removeOption={ id !== 0 && id === arr.length - 1  }    
                                addOption={ id + 2 !== MAX_CITIES && id === arr.length - 1 }
                            />
                        )    
                    }
                </>
            }
            </div>

            <Button variant="secondary2" className={ styles.searchButton } onClick={ onSearch } wide >Search</Button>
        </div>
    );
};

FlightSearch.propTypes = {
    searchType: propTypes.oneOf([1, 2, 3]).isRequired,
    onSearchTypeChange: propTypes.func.isRequired,
    onSearch: propTypes.func.isRequired,
    multiCity: propTypes.array
}

export default FlightSearch;

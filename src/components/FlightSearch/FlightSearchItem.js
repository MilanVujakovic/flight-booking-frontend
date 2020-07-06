import React from "react";
import styles from "./FlightSearch.module.scss";
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { TextField, Popper, Select, InputLabel, MenuItem, FormControl } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Autocomplete } from '@material-ui/lab';
import DateFnsUtils from '@date-io/date-fns';
import propTypes from 'prop-types';

import Button from '../Button';
import { dateToString } from '../../utils/utils';
import { FlightClasses } from '../../utils/AutocompleteConsts';

// --- Disables popper portal ---
const CityAutocompletePopper = props => <Popper { ...props } disablePortal />

const CityPopover = props => {
    const { value, options, dataLabel, onAutocompleteChange } = props;
    
    return (
        <div className={ styles.cityPopover }>
            <Autocomplete
                value={ value === '' ? null : value }
                options={ options }
                renderInput={ (params) => <TextField {...params} autoFocus /> }
                onChange={ (event, value) => onAutocompleteChange(dataLabel, value) }
                PopperComponent={ CityAutocompletePopper }
                disableClearable
                autoHighlight
                autoSelect
                openOnFocus
                fullWidth
            />
        </div>
    );
};

const DatePopover = props => {
    const { onDepartureDateChange, value, dataLabel, minDate } = props;
    return (
        <div className={ styles.datePopover }>
            <MuiPickersUtilsProvider utils={ DateFnsUtils }>
                <DatePicker
                    autoOk
                    orientation="landscape"
                    variant="static"    
                    value={ value }
                    onChange={date => onDepartureDateChange(dataLabel, date)}
                    minDate={ minDate }
                    format="MM/dd/yyyy"
                />
            </MuiPickersUtilsProvider>
        </div>
    );
};

const ClassTravellersPopover = props => {
    const { classValue, onClassChange, travellers, onTravellersChange } = props;
    return (
        <div className={ styles.classTravellersPopover }>
            <FormControl fullWidth color="primary">
                <InputLabel id="ClassLabelId">Class</InputLabel>
                <Select
                    labelId="ClassLabelId"
                    value={ classValue }
                    onChange={ (event) => onClassChange(event.target.value) }
                    MenuProps={{ disablePortal: true }}
                >
                    {/* --- Classes --- */}
                    { FlightClasses.map(name => (
                        <MenuItem key={ name } value={ name }>{ name }</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <div className={ styles.travellers }>
                {/* --- Travellers --- */}
                <span className={ styles.text }>Adults</span>
                <div className={ styles.counter }>
                    <Button variant="primaryRounded" onClick={() => onTravellersChange('adults', -1) }><RemoveIcon /></Button>
                    <span className={ styles.text }>{ travellers.adults }</span>
                    <Button variant="primaryRounded" onClick={() => onTravellersChange('adults', 1) }><AddIcon /></Button>
                </div>
                <span className={ styles.text }>Children</span>
                <div className={ styles.counter }>
                    <Button variant="primaryRounded" onClick={() => onTravellersChange('children', -1) }><RemoveIcon /></Button>
                    <span className={ styles.text }>{ travellers.children }</span>
                    <Button variant="primaryRounded" onClick={() => onTravellersChange('children', 1) }><AddIcon /></Button>
                </div>
            </div>
        </div>
    );
};

const FlightSearchItem = props => {
    const { 
        onDepartureDateChange, 
        searchData, 
        CityOptions, 
        onAutocompleteChange, 
        onBoxClick,
        openPopover, 
        popoverRef, 
        onClassChange, 
        onTravellersChange
     } = props;
    
    return (
        <div className={ styles.flightSearchItem }>
            {/* --- From --- */}
            <SearchBox
                headerText="From"
                buttonText={ searchData.from }
                popoverName="fromCityPopover"
                onBoxClick={ onBoxClick }
                openPopover={ openPopover }
                popoverRef={ popoverRef }
                wide
            >
                <CityPopover 
                    value={ searchData.from }
                    options={ CityOptions }
                    dataLabel= "from"
                    onAutocompleteChange={ onAutocompleteChange }
                />
            </SearchBox>
            {/* --- To --- */}
            <SearchBox
                headerText="To"
                buttonText={ searchData.to }
                popoverName="toCityPopover"
                onBoxClick={ onBoxClick }
                openPopover={ openPopover }
                popoverRef={ popoverRef }
                wide
            >
                <CityPopover 
                    value={ searchData.to }
                    options={ CityOptions }
                    dataLabel= "to"
                    onAutocompleteChange={ onAutocompleteChange }
                />
            </SearchBox>
            {/* --- Departure --- */}
            <SearchBox
                headerText="Departure"
                buttonText={ dateToString(searchData.departure) }
                popoverName="departurePopover"
                onBoxClick={ onBoxClick }
                openPopover={ openPopover }
                popoverRef={ popoverRef }
            >
                <DatePopover 
                    onDepartureDateChange={ onDepartureDateChange }
                    value={ searchData.departure }
                    dataLabel="departure"
                    minDate={ new Date() }
                />
            </SearchBox>
            {/* --- Return --- */}
            <SearchBox
                headerText="Return"
                buttonText={ dateToString(searchData.return) }
                popoverName="returnPopover"
                onBoxClick={ onBoxClick }
                openPopover={ openPopover }
                popoverRef={ popoverRef }
            >
                <DatePopover 
                    onDepartureDateChange={ onDepartureDateChange }
                    value={ searchData.return }
                    dataLabel="return"
                    minDate={ searchData.departure }
                />
            </SearchBox>
            {/* --- Class & Travellers --- */}
            <SearchBox
                headerText="Class & Travellers"
                buttonText={ searchData.class }
                popoverName="classTravellersPopover"
                onBoxClick={ onBoxClick }
                openPopover={ openPopover }
                popoverRef={ popoverRef }
                wide
            >
                <ClassTravellersPopover 
                    classValue={ searchData.class } 
                    onClassChange={ onClassChange } 
                    travellers={ searchData.travellers }
                    onTravellersChange={ onTravellersChange }
                />
            </SearchBox> 
        </div>
    );
};

const SearchBox = props => {
    const { wide, headerText, buttonText, popoverName, onBoxClick, openPopover, popoverRef } = props;
    const isOpen = openPopover === popoverName ? true : false;
    return (
        <div className={ `${ styles.SearchOptionBox } ${ wide ? styles.wide : '' }` } ref={ isOpen ? popoverRef : null }>
            <span className={ styles.boxHeader }>{ headerText }</span>
            <button
                className={ styles.boxContent }
                onClick={ () => onBoxClick(popoverName) } 
            >
                { buttonText }
            </button>
            {
                isOpen && props.children
            }
        </div>
    );
};

SearchBox.propTypes = {
    headerText: propTypes.string.isRequired,
    buttonText: propTypes.string.isRequired,
    popoverName: propTypes.string.isRequired,
    onBoxClick: propTypes.func.isRequired,
    openPopover: propTypes.string.isRequired,
    popoverRef: propTypes.object.isRequired,
    wide: propTypes.bool,
}

CityPopover.propTypes = {
    value: propTypes.string.isRequired,
    options: propTypes.array.isRequired,
    dataLabel: propTypes.string.isRequired,
    onAutocompleteChange: propTypes.func.isRequired
}

DatePopover.propTypes = {
    onDepartureDateChange: propTypes.func.isRequired, 
    value: propTypes.instanceOf(Date).isRequired, 
    dataLabel: propTypes.string.isRequired, 
    minDate: propTypes.instanceOf(Date).isRequired
}

export default FlightSearchItem;
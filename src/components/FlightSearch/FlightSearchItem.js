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
        onTravellersChange,
        variant,
        id,
        addOption,
        removeOption
     } = props;
    
    return (
        <div className={ styles.flightSearchItem }>
            {/* --- From --- */}
            <SearchBox
                id={ id }
                headerText="From"
                buttonText={ searchData.from }
                popoverName="fromCityPopover"
                onBoxClick={ onBoxClick }
                onBoxClickAction={ onBoxClickActions.POPOVER }
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
                id={ id }
                headerText="To"
                buttonText={ searchData.to }
                popoverName="toCityPopover"
                onBoxClick={ onBoxClick }
                onBoxClickAction={ onBoxClickActions.POPOVER }
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
                id={ id }
                headerText="Departure"
                buttonText={ dateToString(searchData.departure) }
                popoverName="departurePopover"
                onBoxClick={ onBoxClick }
                onBoxClickAction={ onBoxClickActions.POPOVER }
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
            { variant === 'return' &&
                <SearchBox
                    id={ id }
                    headerText="Return"
                    buttonText={ dateToString(searchData.return) }
                    popoverName="returnPopover"
                    onBoxClick={ onBoxClick }
                    onBoxClickAction={ onBoxClickActions.POPOVER }
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
            }
            {/* --- Class & Travellers --- */}
            { variant === 'multiCity' ||
                <SearchBox
                    id={ id }
                    headerText="Class & Travellers"
                    buttonText={ searchData.class }
                    popoverName="classTravellersPopover"
                    onBoxClick={ onBoxClick }
                    onBoxClickAction={ onBoxClickActions.POPOVER }
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
            }
            {/* --- Add --- */}
            { (variant === 'multiCity' && addOption) &&
                <SearchBox
                    id={ id }
                    headerText="Add city"
                    icon= { <AddIcon /> }
                    onBoxClick={ onBoxClick }
                    onBoxClickAction={ onBoxClickActions.ADD_CITY }
                />
            }

            {/* --- Remove  --- */}
            { (variant === 'multiCity' && removeOption) &&
                <SearchBox
                    id={ id }
                    headerText="Remove city"
                    icon={ <RemoveIcon /> }
                    onBoxClick={ onBoxClick }
                    onBoxClickAction={ onBoxClickActions.REMOVE_CITY }
                />
            }
        </div>
    );
};

export const onBoxClickActions = {
    POPOVER: 'POPOVER', 
    ADD_CITY: 'ADD_CITY',
    REMOVE_CITY: 'REMOVE_CITY'
};

const SearchBox = props => {
    const { id, wide, headerText, buttonText, popoverName, onBoxClick, onBoxClickAction, openPopover, popoverRef, icon } = props;
    const onBoxClickValue = popoverName !== undefined ? popoverName + id : id;

    const isOpen = openPopover === onBoxClickValue ? true : false;
    return (
        <div className={ `${ styles.SearchOptionBox } ${ wide ? styles.wide : '' }` } ref={ isOpen ? popoverRef : null }>
            <span className={ styles.boxHeader }>{ headerText }</span>
            <button
                className={ styles.boxContent }
                onClick={ () => onBoxClick(onBoxClickAction, onBoxClickValue) } 
            >
                { icon }{ buttonText }
            </button>
            {
                isOpen && props.children
            }
        </div>
    );
};

SearchBox.propTypes = {
    id: propTypes.number.isRequired,
    headerText: propTypes.string.isRequired,
    buttonText: propTypes.string,
    popoverName: propTypes.string,
    onBoxClick: propTypes.func,
    openPopover: propTypes.string,
    popoverRef: propTypes.object,
    icon: propTypes.element,
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
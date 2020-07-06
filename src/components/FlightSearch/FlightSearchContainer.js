import React, { Component } from 'react'

import FlightSearch from './FlightSearch';
import { FlightClasses } from '../../utils/AutocompleteConsts';

const MAX_TRAVELLERS = 10;

class FlightSearchContainer extends Component {

    constructor() {
        super();
        this.popoverRef = React.createRef();
        const tomorrowDate = new Date();
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        this.state = {
            searchType: 1,
            searchData: {
                from: '',
                to: '',
                departure: new Date(),
                return: tomorrowDate,
                class: FlightClasses[0],
                travellers: {
                    adults: 1,
                    children: 0
                }
            },
            openPopover: '',
            CityOptions: [ 'Belgrade', 'Budapest', 'Zagreb' ]
        }
    }

    componentDidMount = () => {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount = () => {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = event => {
        if(this.state.openPopover !== '' && this.popoverRef.current && !this.popoverRef.current.contains(event.target)) {
            this.setState({ openPopover: '' });
        }
    }

    handleSearchTypeChange = (event, type) => {
        event.preventDefault();
        this.setState({ searchType: type });
    }

    handleDepartureDateChange = (dataLabel, value) => {
        let date = { [dataLabel]: value };
        let returnData = this.state.searchData.return;

        // Changes return date if it's less than departure date
        if(dataLabel === 'departure') {
            if(value > returnData) {
                date = {
                    ...date,
                    return: value
                }
            }
        } 
        this.setState(state => {
            return {
                openPopover: '',
                searchData: {
                    ...state.searchData,
                    ...date
                }  
            } 
        });
    }

    handleBoxClick = searchBoxName => {
        this.setState({ openPopover: searchBoxName });
    }

    handleAutocompleteChange = (dataLabel, value) => {
        this.setState(state => {
            return {
                openPopover: '', 
                searchData: {
                    ...state.searchData,
                    [dataLabel]: value
                } 
            };
        });
    }

    handleClassChange = value => {
        this.setState(state => {
            return {
                searchData: {
                    ...this.state.searchData,
                    class: value
                }
            }
        });
    }

    handleTravellersChange = (label, change) => {
        const travellers = this.state.searchData.travellers;
        let value = travellers[label] + change;
        Object.values(travellers).reduce((count, add) => count + add)
        // Returns if number of adults and children exceed MAX number
        if(Object.values(travellers).reduce((count, add) => count + add) + change > MAX_TRAVELLERS) return;
        
        if(value <= 0) {
            if(label === 'adults') value = 1; // Children can't travel alone
            else value = 0;
        }
        else if(value > MAX_TRAVELLERS) value = MAX_TRAVELLERS;

        this.setState(state => {
            return {
                searchData: {
                    ...state.searchData,
                    travellers: {
                        ...state.searchData.travellers,
                        [label]: value
                    }
                }
            }
        });
    }

    handleSearch = (event) => {
        event.preventDefault();
        this.setState({ openPopover: '' });
    }

    render() {
        return (
            <FlightSearch
                { ...this.state } 
                onSearchTypeChange={ this.handleSearchTypeChange }
                onAutocompleteChange={ this.handleAutocompleteChange } 
                onBoxClick={ this.handleBoxClick }
                onDepartureDateChange={ this.handleDepartureDateChange }
                onClassChange={ this.handleClassChange }
                onTravellersChange={ this.handleTravellersChange }
                onSearch={ this.handleSearch }
                popoverRef={ this.popoverRef }
            />
        )
    }
}

export default FlightSearchContainer

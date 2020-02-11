import React, { Component } from 'react';
import FlightInfoItem from "./FlightInfoItem";

export class FlightInfoItemContainer extends Component {

    constructor() {
        super();
        this.state = { buttonType: "secondary-primary-button"}
    }

    mouseEnter = () => {
        this.setState({ buttonType: "primary-secondary-button"});
    }

    mouseLeave = () => {
        this.setState({buttonType: "secondary-primary-button"});
    }

    render() {
        return (
            <FlightInfoItem mouseEnter={this.mouseEnter} mouseLeave={this.mouseLeave} buttonType={this.state.buttonType}/>
        )
    }
}

export default FlightInfoItemContainer

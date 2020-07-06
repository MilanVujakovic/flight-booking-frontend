import React, { Component } from 'react';
import FlightInfoItem from "./FlightInfoItem";

export class FlightInfoItemContainer extends Component {

    constructor() {
        super();
        this.state = { buttonType: "primaryButton"}
    }

    mouseEnter = () => {
        this.setState({ buttonType: "primaryButton"});
    }

    mouseLeave = () => {
        this.setState({buttonType: "primaryButton"});
    }

    render() {
        return (
            <FlightInfoItem mouseEnter={this.mouseEnter} mouseLeave={this.mouseLeave} buttonType={this.state.buttonType}/>
        )
    }
}

export default FlightInfoItemContainer

import React, { Component } from "react";

import FlightSearch from "../components/FlightSearch";
import FlightInfoList from "../components/FlightInfo/FlightInfoList";

class home extends Component {
    render() {
        return (
            <div>
                <FlightSearch />
                <FlightInfoList />
            </div>
        )
    }
}

export default home;



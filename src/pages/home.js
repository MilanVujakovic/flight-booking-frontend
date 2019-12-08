import React, { Component } from "react";

import FlightSearch from "../components/FlightSearch";
import Button from "../components/Button";
import FlightInfo from "../components/FlightInfo";

class home extends Component {
    render() {
        return (
            <div>
                <FlightSearch />
                <h1>Home page</h1>
                <Button>Nesto</Button>
                <FlightInfo />
                <FlightInfo />
                <FlightInfo />
            </div>
        )
    }
}

export default home;



import React from "react";

import styles from "./FlightSearch.module.scss";


import FlightSearchBox from "./FlightSearchBox";
import Button from "../Button";

const FlightSearch = props => (
    <div className={styles["search-back-image"]}>
        <div>
            <h1>Flight search</h1>
        </div>
        <div className={styles["search"]}>
            {/* Flight search type */}
            <div className={styles["search-type"]}>
                <div>One way</div>
                <div>Return</div>
                <div>Multi-city</div>
            </div>

            {/* Search boxes */}
            <div className={styles["search-boxes"]}>
                <FlightSearchBox />
            </div>

            {/* Search button */}
            <div className={styles["search-submit"]}>
                <Button type="primary-secondary-wide-button">Search</Button>
            </div>
        </div>
    </div>
);

export default FlightSearch;

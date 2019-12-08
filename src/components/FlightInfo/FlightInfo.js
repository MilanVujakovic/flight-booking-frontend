import React from "react";
import styles from "./FlightInfo.module.scss";

import Button from "../Button";

const FlightInfo = props => (
    <div className={styles["flight-info"]}>
        <div className={styles["airline-logo"]}/>
        <div className={styles["time-box"]}>
            <div className={styles["time"]}>11:30 - 13:30</div>
            <div className={styles["time"]}>11:30 - 13:30</div>
        </div>
        <div className={styles["duration"]}>2h</div>
        <div className={styles["price"]}>300$</div>
        <div className={styles["select-button"]}><Button>Select</Button></div>
    </div>
);

export default FlightInfo;
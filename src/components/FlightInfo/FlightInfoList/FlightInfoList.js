import React from "react";
import styles from "./FlightInfoList.module.scss";
import FlightInfoItem from "../FlightInfoItem";

const FlightInfoList = props => (
    <div className={styles["list"]}>
        <h1>Seach result</h1>
        <FlightInfoItem />
        <FlightInfoItem />
        <FlightInfoItem />
    </div>
);

export default FlightInfoList;
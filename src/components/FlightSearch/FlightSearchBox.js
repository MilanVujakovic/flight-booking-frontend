import React from "react";
import styles from "./FlightSearch.module.scss";

const FlightSearchBox = props => (
    <div className={styles["flight-search-box"]}>
        <div className={styles["from-search-box"]}>
            <div>From</div>
            <div className={styles["search-box-city"]}>Belgrade</div>
            <div>Aerodrom Nikola Tesla</div>
        </div>
        <div className={styles["to-search-box"]}>
            <div>To</div>
            <div className={styles["search-box-city"]}>Grad</div>
            <div>Aerodrom Nikola Tesla ssssssssssssssssssssssssss</div>
        </div>
        <div className={styles["departure-calendar-box"]}>
            <div>Departure</div>
        </div>
        <div className={styles["return-calendar-box"]}>
            <div>Return</div>
        </div>
        <div className={styles["class-travellers-box"]}>
            <div>Class & Travellers</div>
            <div>1 Traveller,</div>
            <div>Economy</div>
        </div>
    </div>
);

export default FlightSearchBox;
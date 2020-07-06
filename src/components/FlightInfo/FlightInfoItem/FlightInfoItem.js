import React from "react";
import styles from "./FlightInfoItem.module.scss";

import Button from "../../Button";

const FlightInfoItem = props => (
    <div className={styles["flight-info"]} onMouseEnter={props.mouseEnter} onMouseLeave={props.mouseLeave}>
        <div className={styles["airline-logo"]}/>
        <div className={styles["time-box"]}>
            <div className={styles["time"]}>11:30 - 13:30</div>
            <div className={styles["time"]}>11:30 - 13:30</div>
        </div>
        <div className={styles["duration"]}>2h</div>
        <div className={styles["price"]}>300$</div>
        <div className={styles["select-button"]}><Button type={props.buttonType} onClick= { () => console.log('item!')}>Select</Button></div>
    </div>
);

export default FlightInfoItem;
import React from "react"
import styles from "./Header.module.scss"
import { IoIosAirplane } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Header = props => (
    <div className={styles["together"]}>
    <nav>
        <div className={styles["header"]}>
            <ul className={styles["navbar"]}>
                <li className={styles["navbar-main-button"]}>
                    <div className={styles["navbar-text-icon-left"]}>
                        <IoIosAirplane />
                        <div>Flights</div>
                    </div>
                </li>

                <li className={styles["navbar-main-button"]}>
                    <div>Airlines</div>
                </li>

                <li className={styles["navbar-right"]}>
                    <div className={styles["navbar-text-icon-right"]}>
                        <div>Login</div>
                        <IoIosArrowDropdownCircle />
                    </div>
                </li>

                <li className={styles["sign-up-button"]}>
                    <div>Sign up</div>
                </li>
            </ul>
        </div>
    </nav>
    <div className={styles["back"]}></div>
    </div>
);

export default Header;
import React from "react"
import styles from "./Header.module.scss"
import { IoIosAirplane } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = props => (
    <nav>
        <div className={styles["header"]}>
            <ul className={styles["navbar"]}>
                <li className={styles["navbar-main-link"]}>
                    <Link to="/">
                        <div className={styles["navbar-text-icon-left"]}>
                            <IoIosAirplane />
                            <div>Flights</div>
                        </div>
                    </Link>
                </li>

                <li className={styles["navbar-main-link"]}>
                    <Link to="/airlines">Airlines</Link>
                </li>
                <div className={styles["navbar-right"]}>
                    <li className={styles["navbar-main-link"]}>
                        <Link to="/login">Log in</Link>
                    </li>

                    <li>
                        <Link to="/sign-up" className={styles["sign-up-link"]}>Sign up</Link>
                    </li>
                </div>
            </ul>
        </div>
    </nav>
);

export default Header;
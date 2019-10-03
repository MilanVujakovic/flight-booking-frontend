import React from "react"
import styles from "./Header.module.scss"
import { IoIosAirplane } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
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

                <li className={styles["navbar-right"]}>
                    <a href="#0">
                        <div className={styles["navbar-text-icon-right"]}>
                            <div>Login</div>
                            <IoIosArrowDropdownCircle />
                        </div>
                    </a>
                </li>

                <li>
                    <Link to="/sign-up" className={styles["sign-up-link"]}>Sign up</Link>
                </li>
            </ul>
        </div>
    </nav>
    /*<div className={styles["back"]}></div>*/
);

export default Header;
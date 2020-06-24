import React from 'react'
import styles from './Header.module.scss'
// icons
import { IconContext } from 'react-icons';
import { IoMdContact, IoIosNotificationsOutline } from 'react-icons/io';

import { Link } from "react-router-dom";

const Header = props => (
    <nav>
        <div className={styles['header']}>
            <ul className={styles['navbar']}>
                {/* --- Left navbar --- */}
                <div className={styles['navbar-left']}>
                    <NavbarItem to='/' className={styles['navbar-link']}>Flights</NavbarItem>
                    <NavbarItem to='/airlines' className={styles['navbar-link']}>Airlines</NavbarItem>
                </div>
                {/* --- Right navbar --- */}
                { props.isAuthenticated ?
                    userMenu(props) :
                    guestMenu()
                }
            </ul>
        </div>
    </nav>
);

// menu for logged user
const userMenu = ({ onLogout, onDropdownToggle, isOpen, dropdownRef }) => {
    return (
        <div className={styles["navbar-right"]}>
        <IconContext.Provider value={{ size: '3.5rem', className: styles['ico'] }}>
            <NavbarItem to='/notifications' className={styles['navbar-icon']}>
                <IoIosNotificationsOutline/>
            </NavbarItem>

            <li ref={ dropdownRef }>
                <button className={styles['navbar-icon']} onClick={ onDropdownToggle }>
                    <IoMdContact/>
                </button>
                { isOpen && <DropdownMenu onLogout={ onLogout } onDropdownToggle={ onDropdownToggle }></DropdownMenu> }
            </li>
        </IconContext.Provider>
    </div>
    );
};

// menu for guest to log in or sign up
const guestMenu = () => {
    return (
        <div className={styles['navbar-right']}>
            <NavbarItem to='/login' className={styles['navbar-link']}>Log in</NavbarItem>
            <NavbarItem to='/signup' className={styles['sign-up-link']}>Sign up</NavbarItem>
        </div>
    );
};

const NavbarItem = props => {
    return (
        <li>
           <Link to={ props.to } className={props.className}>{ props.children }</Link> 
        </li>
    );
}

const DropdownMenu = ({ onLogout, onDropdownToggle }) => {

    const DropdownItem = (props) => {
            return (  props.button 
                ? <button className={styles['dropdown-menu-item']} onClick={ onLogout }>{ props.children }</button> 
                : <Link to={props.to} className={styles['dropdown-menu-item']} onClick={ onDropdownToggle }>{ props.children }</Link>
            );
    };

    return (
        <div className={styles['dropdown']}>
            <DropdownItem to='/profile'>Profile</DropdownItem>
            <DropdownItem to='/settings'>Settings</DropdownItem>
            <DropdownItem button>Log out</DropdownItem>
        </div>
    );
};

export default Header;
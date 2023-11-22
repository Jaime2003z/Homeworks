import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavComponent.module.css'

export const NavComponent = () => {
    return (
        <nav className={styles.principal}>
            <ul>
                <li>
                    <NavLink exact to="/homepage" activeClassName={styles.active}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName={styles.active}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" activeClassName={styles.active}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
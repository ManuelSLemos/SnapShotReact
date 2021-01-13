import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const Menu = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/mountain"> Mountain </NavLink></li>
                <li><NavLink to="/beach"> Beaches </NavLink></li>
                <li><NavLink to="/bird"> Birds </NavLink></li>
                <li><NavLink to="/food"> Foods </NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu;
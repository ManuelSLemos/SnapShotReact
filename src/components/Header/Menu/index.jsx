import React from 'react';

import './style.css';

const Menu = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><a href="/mountain"> Mountain </a></li>
                <li><a href="/beach"> Beaches </a></li>
                <li><a href="/bird"> Birds </a></li>
                <li><a href="/food"> Foods </a></li>
            </ul>
        </nav>
    )
}

export default Menu;
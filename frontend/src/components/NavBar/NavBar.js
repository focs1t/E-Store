import React from 'react';
import './NavBar.css';
import NavBarTop from "./NavBarBot/NavBarTop";
import NavBarMid from "./NavBarMid/NavBarMid";
import NavBarBot from "./NavBarTop/NavBarBot";


const NavBar = () => {
    return (
        <header>
            <div className="header">
                <NavBarTop />
                <NavBarMid />
                <NavBarBot />
            </div>
        </header>
    );
};

export default NavBar;
import React from 'react';
import {Link} from "react-router-dom";
import './NavBarTop.css';

const NavBarTop = () => {
    return (
        <div className="header-part-top">
            <div className="container">
                <div className="contacts">
                    <div className="phone">
                        <p>+7 777 777-77-77</p>
                    </div>
                    <div className="phone-2">
                        <p>+7 777 777-77-77</p>
                    </div>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to='/about'>О нас</Link>
                        </li>
                        <li>
                            <Link to='/oferta'>Доставка и оплата</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBarTop;
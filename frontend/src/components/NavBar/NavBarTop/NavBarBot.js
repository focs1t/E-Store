import React, {useContext} from 'react';
import Menu from "../../../menu.png";
import {Link} from "react-router-dom";
import {Context} from "../../../index";
import './NavBarBot.css';

const NavBarBot = () => {
    const {user} = useContext(Context)
    return (
        <div className="header-part-bottom">
            <div className="container">
                <div className="catalog">
                    <button type="button">
                            <span className="show">
                                <img src={Menu} alt=""/>
                            </span>
                        Каталог
                    </button>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <Link to='/about'>О компании</Link>
                        </li>
                        <li>
                            <Link to='/contacts'>Контакты</Link>
                        </li>
                        <li>
                            {user.isAuth ?
                                <Link to='/account'>Личный кабинет</Link>
                                :
                                <Link to='/login'>Личный кабинет</Link>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBarBot;
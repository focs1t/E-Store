import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Logo from "../../../logo.png";
import Search from "../../../search.png";
import Admin from "../../../admin.png";
import Account from "../../../user.png";
import Basket from "../../../shopping-cart.png";
import {Context} from "../../../index";
import './NavBarMid.css';

const NavBarMid = () => {
    const {user} = useContext(Context)
    return (
        <div className="header-part-main">
            <div className="container">
                <div className="logo">
                    <Link to='/'>
                        <img src={Logo} alt="Муромский пруд"/>
                    </Link>
                </div>
                <div className="search">
                    <form action="/search" method="get">
                        <input name="res" type="text" placeholder="Поиск"/>
                        <button type="submit">
                                <span>
                                    <img src={Search} alt="Поиск"/>
                                </span>
                        </button>
                    </form>
                </div>
                <div className="controls">
                    {user.isAuth ?
                        <div className="auth">
                            <Link to="/admin">
                                        <span>
                                            <img src={Admin} alt="Админ"/>
                                        </span>
                            </Link>
                            <Link to="/account">
                                        <span>
                                            <img src={Account} alt="Личный кабинет"/>
                                        </span>
                            </Link>
                            <Link to="/basket">
                                        <span>
                                            <img src={Basket} alt="Корзина"/>
                                        </span>
                            </Link>
                        </div>
                        :
                        <div className="not-auth">
                            <Link to="/login">
                                        <span>
                                            <img src={Account} alt="Личный кабинет"/>
                                        </span>
                            </Link>
                            <Link to="/login">
                                        <span>
                                            <img src={Basket} alt="Корзина"/>
                                        </span>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBarMid;
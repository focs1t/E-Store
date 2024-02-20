import React, {useContext} from 'react';
import {Context} from "../index";
import {Link} from "react-router-dom";
import Logo from '../logo.png'
import Search from '../search.png'
import Basket from '../shopping-cart.png'
import Account from '../user.png'
import Admin from "../admin.png";
import Menu from "../menu.png"
import '../css/NavBar.css';


const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <header>
            <div className="header">
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
            </div>
        </header>
    );
};

export default NavBar;
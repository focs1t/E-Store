import Admin from "./pages/Admin";
import Account from "./pages/Account";
import Basket from "./pages/Basket";
import Main from "./pages/Main";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Contacts from "./pages/Contacts";
import Device from "./pages/Device";
import Oferta from "./pages/Oferta";

export const authPaths = [
    {
        path: '/admin',
        Element: Admin
    },
    {
        path: '/Account',
        Element: Account
    },
    {
        path: '/Basket',
        Element: Basket
    }
]

export const publicPaths = [
    {
        path: '/',
        Element: Main
    },
    {
        path: '/oferta',
        Element: Oferta
    },
    {
        path: '/about',
        Element: About
    },
    {
        path: '/login',
        Element: Auth
    },
    {
        path: '/registration',
        Element: Auth
    },
    {
        path: '/contacts',
        Element: Contacts
    },
    {
        path: '/device' + '/:id',
        Element: Device
    }
]
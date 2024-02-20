import Admin from "./pages/Admin";
import Account from "./pages/Account";
import Basket from "./pages/Basket";
import Main from "./pages/Main";
import About from "./pages/About";
import Auth from "./pages/Auth";
import Contacts from "./pages/Contacts";
import Device from "./pages/Device";

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
        path: '/About',
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
        path: '/Contacts',
        Element: Contacts
    },
    {
        path: '/Device' + '/:id',
        Element: Device
    }
]
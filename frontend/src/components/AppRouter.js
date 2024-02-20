import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {authPaths, publicPaths} from "../paths";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {user.isAuth && authPaths.map(({path, Element}) =>
                <Route exact key={path} path={path} element={<Element />}/>
            )}
            {publicPaths.map(({path, Element}) =>
                <Route exact key={path} path={path} element={<Element />}/>
            )}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    );
};

export default AppRouter;
import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {authPaths, publicPaths} from "../paths";

const AppRouter = () => {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authPaths.map(({path, Element}) =>
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
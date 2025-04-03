import React from 'react';
import routeList from './routes';
import { Route, Routes } from 'react-router';

const RouteWrapper = () => {
    const pendingRoute = routeList.map(({element: Element, path }) => (
         <Route
         key={path}
         element={<Element/>}
         path={path}
        />
    ))
    return (
        <Routes>
            {pendingRoute}
        </Routes>
    );
};

export default RouteWrapper;
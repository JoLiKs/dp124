import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { router } from './config';

export const RouterComponent = () => {
    return (
        <Routes>
            {router.map(({ path, element }) => (
                <Route key={path.toString()} path={path} element={element} />
            ))}
        </Routes>
    );
};

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { router } from './config';
import styles from './RouterComponent.module.scss';

export const RouterComponent = () => {
    return (
        <Routes className={styles.routesBlock}>
            {router.map(({ path, element }) => (
                <Route key={path.toString()} path={path} element={element} />
            ))}
        </Routes>
    );
};

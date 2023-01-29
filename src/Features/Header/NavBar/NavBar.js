import React from 'react';
import { ArrowIcon, navBtnList } from '../../../Shared';
import { Link } from 'react-router-dom';
import { path } from '../../RouterComponent/config/config';
import styles from './NavBar.module.scss';

export const NavBar = () => {
    return (
        <nav>
            <Link to={path.courses} color="primary" className={styles.link}>
                {navBtnList[0].btnName} <ArrowIcon className={styles.arrowIcon} />
            </Link>
            <Link to={path.teachers}>{navBtnList[1].btnName}</Link>
        </nav>
    );
};

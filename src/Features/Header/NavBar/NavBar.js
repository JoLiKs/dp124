import React from 'react';
import { ArrowIcon, coursesList, navBtnList } from '../../../Shared';
import { Link } from 'react-router-dom';
import { path } from '../../RouterComponent/config/config';
import styles from './NavBar.module.scss';

export const NavBar = () => {
    return (
        <nav>
            <Link to={path.courses} color="primary" className={`${styles.link} ${styles.arrowIcon}`}>
                {navBtnList[0].btnName} <ArrowIcon />
            </Link>
            <Link to={path.teachers} className={styles.link}>
                {navBtnList[1].btnName}
            </Link>
            <ul className={styles.dropdown}>
                {coursesList.map(({ courseName, titleKey }, index) => (
                    <li className={styles.subMenuTitle} key={index}>
                        <Link className={styles.link} to={path[titleKey]}>
                            {courseName}
                        </Link>
                        <ArrowIcon className={styles.arrow} />
                    </li>
                ))}
            </ul>
        </nav>
    );
};

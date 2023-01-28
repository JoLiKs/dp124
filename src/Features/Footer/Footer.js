import React from 'react';
import styles from './Footer.module.scss';
import { coursesList, LogoIcon, navBtnList } from '../../Shared';
import { Social } from '../Header/Social';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <a href="#">Договор публичной оферты</a>
                <ul>
                    <li>{navBtnList[0].btnName}</li>
                    {coursesList.map(({ courseName }) => (
                        <li>{courseName}</li>
                    ))}
                    <li>{navBtnList[1].btnName}</li>
                </ul>
            </div>
            <div>
                <Social />
            </div>
            <div>
                <Link to="/">
                    <LogoIcon style={{ color: 'red' }} />
                </Link>
                <p>© 2023 Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { contacts, coursesList, LogoIcon, navBtnList, TwoStarsIcon } from '../../Shared';
import { Social } from '../Header/Social';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <TwoStarsIcon className={styles.wrapper__iconOne} />
            <TwoStarsIcon className={styles.wrapper__iconTwo} />
            <div className={styles.wrapper__leftSection}>
                <a href="#">Договор публичной оферты</a>
                <ul>
                    <li>{navBtnList[0].btnName}</li>
                    {coursesList.map(({ id, courseName }) => (
                        <li key={id}>{courseName}</li>
                    ))}
                    <li>{navBtnList[1].btnName}</li>
                </ul>
            </div>
            <div className={styles.wrapper__socialSection}>
                <Social className={styles.social} />
            </div>
            <span className={styles.wrapper__border}></span>
            <div className={styles.wrapper__logoSection}>
                <Link to="/">
                    <LogoIcon alt="logo" className={styles.logo} />
                </Link>
                <p className={styles.wrapper__logoSection__text}>© 2023 Все права защищены.</p>
            </div>
            <span className={styles.wrapper__border}></span>
            <div className={styles.wrapper__rightSection}>
                <h3 className={styles.wrapper__rightSection__title}>Контакты</h3>
                <p className={styles.wrapper__rightSection__text}>{contacts.witness}</p>
                <p className={styles.wrapper__rightSection__text}>{contacts.address}</p>
                <p className={styles.wrapper__rightSection__text}>{contacts.phone}</p>
                <p className={styles.wrapper__rightSection__text}>{contacts.email}</p>
            </div>
        </footer>
    );
};

export default Footer;

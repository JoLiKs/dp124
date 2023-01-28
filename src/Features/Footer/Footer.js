import React from 'react';
import { contacts, coursesList, LogoIcon, navBtnList } from '../../Shared';
import { Social } from '../Header/Social';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <a href="#">Договор публичной оферты</a>
                <ul>
                    <li>{navBtnList[0].btnName}</li>
                    {coursesList.map(({ id, courseName }) => (
                        <li key={id}>{courseName}</li>
                    ))}
                    <li>{navBtnList[1].btnName}</li>
                </ul>
            </div>
            <div>
                <Social className={styles.social} />
            </div>
            <div>
                <Link to="/">
                    <LogoIcon className={styles.logo} />
                </Link>
                <p>© 2023 Все права защищены.</p>
            </div>
            <div>
                <h3>Контакты</h3>
                <p>{contacts.witness}</p>
                <p>{contacts.address}</p>
                <p>{contacts.phone}</p>
                <p>{contacts.email}</p>
            </div>
        </footer>
    );
};

export default Footer;

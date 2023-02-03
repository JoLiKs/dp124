import React from 'react';
import { Link } from 'react-router-dom';
import { Button, LogoIcon } from '../../Shared';
import { NavBar } from './NavBar';
import { Social } from './Social';
import { tel } from './config';
import { BurgerMenu } from '../index';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.header__logo}>
                <LogoIcon />
            </Link>
            <NavBar />
            <a href={`tel: ${tel}`} className={styles.header__tel}>
                {tel}
            </a>
            <Social className={styles.header__social} />
            <Button className={styles.header__startBtn}>Начать зарабатывать в IT</Button>
            <BurgerMenu />
        </header>
    );
};

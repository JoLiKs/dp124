import React from 'react';
import { Link } from 'react-router-dom';
import { Button, LogoIcon } from '../../Shared';
import { NavBar } from './NavBar';
import { Social } from './Social';
import { tel } from './config';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <LogoIcon />
            </Link>
            <NavBar />
            <a href={`tel: ${tel}`}>{tel}</a>
            <Social />
            <Button>Начать зарабатывать в IT</Button>
        </header>
    );
};

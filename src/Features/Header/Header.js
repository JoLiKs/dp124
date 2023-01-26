import React from 'react';
import { Button, LogoIcon } from '../../Shared';
import { NavBar } from './NavBar';
import { Social } from './Social';
import { tel } from './config';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.header}>
            <LogoIcon />
            <NavBar />
            <a href={`tel: ${tel}`}>{tel}</a>
            <Social />
            <Button>Начать зарабатывать в IT</Button>
        </header>
    );
};

import React, { useState } from 'react';
import { BurgerIcon, Button, PlusIcon } from '../../Shared';
import { NavBar } from '../Header/NavBar';
import { tel } from '../Header/config';
import { Social } from '../Header/Social';
import stylesBurger from './BurgerMenu.module.scss';
import styles from '../Header/header.module.scss';

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={stylesBurger.burger_container}>
            <button className={stylesBurger.burger_btn} onClick={handleOpen}>
                {open ? <PlusIcon /> : <BurgerIcon />}
            </button>
            {open && (
                <div>
                    <NavBar />
                    <a href={`tel: ${tel}`} className={styles.header__tel}>
                        {tel}
                    </a>
                    <Social className={styles.header__social} />
                    <Button className={styles.header__startBtn}>Начать зарабатывать в IT</Button>
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;

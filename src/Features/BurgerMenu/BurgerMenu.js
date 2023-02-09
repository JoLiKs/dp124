import React, { useState } from 'react';
import { BurgerIcon, Button, PlusIcon } from '../../Shared';
import { NavBar } from '../Header/NavBar';
import { tel } from '../Header/config';
import { Social } from '../Header/Social';
import stylesBurger from './BurgerMenu.module.scss';
import styles from '../Header/header.module.scss';

export const BurgerMenu = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={stylesBurger.burger_container}>
            <div className={stylesBurger.burger_btn} onClick={handleOpen}>
                {open ? (
                    <div className={stylesBurger.burger_container_btn_close}>
                        <span></span>
                        <span></span>
                    </div>
                ) : (
                    <div className={stylesBurger.burger_container_btn_open}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
            </div>
            {open && (
                <div className={stylesBurger.burger_container_menu}>
                    <NavBar className={stylesBurger.burger_container_menu_navBar} />
                    <a href={`tel: ${tel}`} className={stylesBurger.burger_container_menu_tel}>
                        {tel}
                    </a>
                    <Social className={stylesBurger.burger_container_menu_social} />
                    <Button className={stylesBurger.burger_container_menu_startBtn}>Начать зарабатывать в IT</Button>
                </div>
            )}
        </div>
    );
};

import React, { useState } from 'react';
import { ArrowIcon, BurgerIcon, Button, coursesList, LogoIcon, navBtnList, PlusIcon, TwoStarsIcon } from '../../Shared';
import { NavBar } from '../Header/NavBar';
import { tel } from '../Header/config';
import { Social } from '../Header/Social';
import stylesBurger from './BurgerMenu.module.scss';
import styles from '../Header/header.module.scss';
import { Link } from 'react-router-dom';
import { path } from '../RouterComponent/config/config';

export const BurgerMenu = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={stylesBurger.burger_container}>
            <div className={stylesBurger.burger_container_btn}>
                {open ? (
                    <div className={stylesBurger.burger_container_btn_close} onClick={handleOpen}>
                        <span></span>
                        <span></span>
                    </div>
                ) : (
                    <div className={stylesBurger.burger_container_btn_open} onClick={handleOpen}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
            </div>
            {open && (
                <div className={stylesBurger.burger_container_menu}>
                    <Link to="/" style={{ alignSelf: 'center' }}>
                        <LogoIcon alt="logo" className={stylesBurger.burger_container_menu_logoIcon} />
                    </Link>
                    <a className={stylesBurger.burger_container_menu_agreement} href="#">
                        Договор публичной оферты
                    </a>
                    <Link to={path.courses} color="primary" className={stylesBurger.burger_container_menu_courses}>
                        {navBtnList[0].btnName} <ArrowIcon />
                    </Link>
                    <ul className={stylesBurger.burger_container_menu_coursesList}>
                        {coursesList.map(({ courseName, titleKey }, index) => (
                            <li className={stylesBurger.burger_container_menu_coursesList_item} key={index}>
                                <Link
                                    className={stylesBurger.burger_container_menu_coursesList_item_link}
                                    to={path[titleKey]}
                                >
                                    {courseName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to={path.teachers} className={stylesBurger.burger_container_menu_teacher}>
                        {navBtnList[1].btnName}
                    </Link>
                    <div className={stylesBurger.burger_container_menu_contacts}>
                        <h4 className={stylesBurger.burger_container_menu_contacts_title}>Контакты</h4>
                        <p className={stylesBurger.burger_container_menu_contacts_text}>
                            Адрес: 220035, Республика Беларусь, г. Минск, ул. Сурганова, д. 43, оф. 802 Режим работы:
                            понедельник - пятница с 10:00 до 19:00
                        </p>
                        <p className={stylesBurger.burger_container_menu_contacts_text}>
                            +375(29) 000-00-00 | nashapochta@gmail.com
                        </p>
                    </div>
                    <Social className={stylesBurger.burger_container_menu_social} />
                    <TwoStarsIcon className={stylesBurger.burger_container_menu__iconOne} />
                    <TwoStarsIcon className={stylesBurger.burger_container_menu__iconTwo} />
                    <p className={stylesBurger.burger_container_menu_rights}>© 2023 Все права защищены.</p>
                </div>
            )}
        </div>
    );
};

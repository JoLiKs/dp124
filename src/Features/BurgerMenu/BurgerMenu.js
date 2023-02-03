import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';
import { BurgerIcon, PlusIcon } from '../../Shared';

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className={styles.burger_container}>
            <button className={styles.burger_btn} onClick={handleOpen}>
                {open ? <PlusIcon /> : <BurgerIcon />}
            </button>
            {open && (
                <nav>
                    <ul>
                        <li>Menu item 1</li>
                        <li>Menu item 2</li>
                        <li>Menu item 3</li>
                    </ul>
                </nav>
            )}
        </div>
    );
};

export default BurgerMenu;

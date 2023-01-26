import React from 'react';
import { ArrowIcon, LinkComponent, navBtnList } from '../../../Shared';
import styles from './NavBar.module.scss';

export const NavBar = () => {
    return (
        <nav>
            {navBtnList.map(({ id, btnName }) => (
                <LinkComponent color="primary" className={styles.link} key={id}>
                    {btnName}
                    {id === 5 && <ArrowIcon className={styles.arrowIcon} />}
                </LinkComponent>
            ))}
        </nav>
    );
};

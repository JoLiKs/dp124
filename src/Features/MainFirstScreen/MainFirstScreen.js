import React from 'react';
import styles from './MainFirstScreen.module.scss';
import { OneStarIcon } from '../../Shared';

export const MainFirstScreen = () => {
    return (
        <div className={styles.wrapper}>
            <h1>
                IT – это просто,если ты
                <span>
                    <OneStarIcon />
                    не один
                </span>
            </h1>
        </div>
    );
};

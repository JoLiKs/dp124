import React from 'react';
import styles from './MainFirstScreen.module.scss';
import { OneStarIcon } from '../../Shared';

export const MainFirstScreen = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                IT – это просто,если ты
                <span className={styles.noOne}>
                    <OneStarIcon />
                    не один
                </span>
            </h1>
            <h3>
                Школа Dev Place помогает новичкам стать программистом и пройти собеседование в зарубежные IT-компании с
                возможностью работы full remote. Мы оказали помощь уже 94+ начинающим айтишникам
            </h3>
        </div>
    );
};

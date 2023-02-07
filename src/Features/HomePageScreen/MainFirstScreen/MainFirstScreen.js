import React from 'react';
import { Link } from 'react-router-dom';
import { Button, OneStarIcon } from '../../../Shared';
import { path } from '../../RouterComponent/config/config';
import styles from './MainFirstScreen.module.scss';

export const MainFirstScreen = () => {
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.title}>
                IT – это просто,<br></br>если ты
                <span className={styles.title__noOne}>
                    <OneStarIcon />
                    не один
                </span>
            </h1>
            <p className={styles.text}>
                Школа Dev Place помогает новичкам стать программистом и пройти собеседование в зарубежные IT-компании с
                возможностью работы full remote. Мы оказали помощь уже 94+ начинающим айтишникам
            </p>
            <Link to={path.courses}>
                <Button color={'secondary'} className={styles.btn}>
                    Узнать подробнее
                </Button>
            </Link>
        </section>
    );
};

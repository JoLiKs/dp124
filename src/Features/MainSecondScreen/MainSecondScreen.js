import React from 'react';
import { advertisementList } from '../../Shared/config/constants';
import styles from './mainSecondScreen.module.scss';
import { ArrowsIcon, BurstStarIcon } from '../../Shared';

export const MainSecondScreen = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper__titleBlock}>
                <h2 className={styles.wrapper__titleBlock__title}>
                    Разработчик в 2023 – перспективно, востребовано, интересно
                    <BurstStarIcon />
                </h2>
                <span />
            </div>

            <div className={styles.wrapper__infoContainer}>
                <div className={styles.wrapper__infoContainer__leftBlock}>
                    <p className={styles.wrapper__infoContainer__leftBlock__text}>
                        в среднем около <span>$1920</span>
                        <br></br>в месяц получает специалист уже через 1,5 года работы
                    </p>
                    <ArrowsIcon />
                </div>
                <div className={styles.wrapper__infoContainer__rightBlock}>
                    {advertisementList.map(({ id, icon, title }, index) => (
                        <div key={id + index} className={styles.wrapper__infoContainer__rightBlock__info}>
                            {icon}
                            <p className={styles.wrapper__infoContainer__rightBlock__info__text}>{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import React from 'react';
import { BurstStarIcon } from '../../../Shared';
import photoOne from '../../../Shared/img/photoOne.svg';
import photoTwo from '../../../Shared/img/photoTwo.svg';
import photoThree from '../../../Shared/img/photoThree.svg';
import styles from './MainFourthScreen.module.scss';

export const MainFourthScreen = () => {
    return (
        <section className={styles.wrapper}>
            <h3 className={styles.wrapper__title}>
                Наши курсы состоят из: <BurstStarIcon />
            </h3>
            <div className={styles.wrapper__topContent}>
                <figure className={styles.wrapper__topContent__itemOne}>
                    <img width="221" height="251" src={photoOne} alt="ты в IT" />
                </figure>
                <figure className={styles.wrapper__topContent__itemTwo}>
                    <img width="221" height="251" src={photoTwo} alt="ты в IT" />
                </figure>
                <ul className={styles.wrapper__topContent__itemThree}>
                    <li className={styles.wrapper__topContent__itemThree__list}>
                        бесконечности <strong>практики;</strong>
                    </li>
                    <li className={styles.wrapper__topContent__itemThree__list}>
                        <strong>помощи с поиском</strong> удалённой вакансии;
                    </li>
                    <li className={styles.wrapper__topContent__itemThree__list}>
                        проектов от <strong>реальных заказчиков</strong> в вашем портфолио;
                    </li>
                    <li className={styles.wrapper__topContent__itemThree__list}>
                        работы над проектами в команде под наблюдением <strong>опытного ментора;</strong>
                    </li>
                </ul>
                <figure className={styles.wrapper__topContent__itemFour}>
                    <img width="221" height="251" src={photoThree} alt="ты в IT" />
                </figure>
            </div>
            <div className={styles.wrapper__bottomContent}>
                <figure className={styles.wrapper__bottomContent__itemOne}>
                    <img width="221" height="251" src={photoThree} alt="ты в IT" />
                </figure>
                <ul className={styles.wrapper__bottomContent__itemTwo}>
                    <li className={styles.wrapper__bottomContent__itemTwo__list}>
                        только <strong>полезной</strong> теории;
                    </li>
                    <li className={styles.wrapper__bottomContent__itemTwo__list}>
                        помощи в <strong>прохождении собеседований</strong> в зарубежные IT-компании;
                    </li>
                    <li className={styles.wrapper__bottomContent__itemTwo__list}>
                        <strong>консультации</strong> по визам, видам на жительство и разрешением на работу за границей;
                    </li>
                    <li className={styles.wrapper__bottomContent__itemTwo__list}>
                        проверенных рекомендаций по <strong>составлению портфолио</strong> для работы на фрилансе;
                    </li>
                </ul>
                <figure className={styles.wrapper__bottomContent__itemThree}>
                    <img width="221" height="251" src={photoOne} alt="ты в IT" />
                </figure>
                <figure className={styles.wrapper__bottomContent__itemFour}>
                    <img width="221" height="251" src={photoTwo} alt="ты в IT" />
                </figure>
            </div>
        </section>
    );
};

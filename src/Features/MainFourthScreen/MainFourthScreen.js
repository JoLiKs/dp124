import React from 'react';
import { BurstStarIcon } from '../../Shared';
import photoOne from '../../Shared/img/photoOne.svg';
import photoTwo from '../../Shared/img/photoTwo.svg';
import photoThree from '../../Shared/img/photoThree.svg';
import styles from './MainFourthScreen.module.scss';

const MainFourthScreen = () => {
    return (
        <section className={styles.wrapper}>
            <h3 className={styles.wrapper__title}>
                Наши курсы состоят из: <BurstStarIcon />
            </h3>
            <div className={styles.wrapper__topContent}>
                <figure>
                    <img width="221" height="251" src={photoOne} alt="" />
                </figure>
                <figure>
                    <img width="221" height="251" src={photoTwo} alt="" />
                </figure>
                <ul>
                    <li>
                        бесконечности <strong>практики;</strong>
                    </li>
                    <li>
                        <strong>помощи с поиском</strong> удалённой вакансии;
                    </li>
                    <li style={{ color: '#4ca8a9' }}>
                        проектов от <strong>реальных заказчиков</strong> в вашем портфолио;
                    </li>
                    <li>
                        работы над проектами в команде под наблюдением <strong>опытного ментора;</strong>
                    </li>
                </ul>
                <figure>
                    <img width="221" height="251" src={photoThree} alt="" />
                </figure>
            </div>
            <div className={styles.wrapper__bottomContent}>
                <figure>
                    <img width="221" height="251" src={photoThree} alt="" />
                </figure>
                <ul>
                    <li>
                        только <strong>полезной</strong> теории;
                    </li>
                    <li>
                        помощи в <strong>прохождении собеседований</strong> в зарубежные IT-компании;
                    </li>
                    <li style={{ color: '#4ca8a9' }}>
                        <strong>консультации</strong> по визам, видам на жительство и разрешением на работу за границей;
                    </li>
                    <li>
                        проверенных рекомендаций по <strong>составлению портфолио</strong> для работы на фрилансе;
                    </li>
                </ul>
                <figure>
                    <img width="221" height="251" src={photoOne} alt="" />
                </figure>
                <figure>
                    <img width="221" height="251" src={photoTwo} alt="" />
                </figure>
            </div>
        </section>
    );
};

export default MainFourthScreen;

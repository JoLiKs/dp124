import React from 'react';
import { BurstStarIcon } from '../../Shared';
import photoOne from '../../Shared/img/photoOne.svg';
import photoTwo from '../../Shared/img/photoTwo.svg';
import photoThree from '../../Shared/img/photoThree.svg';
import styles from './MainFourthScreen.module.scss';

const MainFourthScreen = () => {
    return (
        <div>
            <h3>
                Наши курсы состоят из: <BurstStarIcon />
            </h3>
            <div style={{ display: 'flex' }}>
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
                    <li>
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
            <div style={{ display: 'flex' }}>
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
                    <li>
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
        </div>
    );
};

export default MainFourthScreen;

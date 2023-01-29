import React from 'react';
import { FeedbackComponent } from '../../Features';
import { ArrowButtonIcon, OneStarIcon } from '../../Shared';
import onLinePhoto from '../../Shared/img/offlineCoursesPhoto.svg';
import offLinePhoto from '../../Shared/img/onlineCoursesPhoto.svg';

export const CoursesPage = () => {
    return (
        <div>
            <h2>Курсы</h2>
            <p>Наша программа разработана ведущими IT-специалистами, которые 4+ года работали с новичками в IT</p>
            <div style={{ display: 'flex' }}>
                <h3>
                    <span>ОНЛАЙН</span> ОБУЧЕНИЕ <OneStarIcon />
                </h3>
                <div>
                    <ul>
                        Почему нужно выбрать
                        <li>удобный график</li>
                        <li>экономия времени и денег</li>
                        <li>учёба с комфортом</li>
                        <li>преподаватель из иностранной IT-компании</li>
                        <li>постоянная поддержка личного ментора</li>
                        <li>учёба в любой точке мира</li>
                    </ul>
                </div>
            </div>
            <div>
                <ArrowButtonIcon />
            </div>
            <figure style={{ width: '100%' }}>
                <img src={onLinePhoto} alt="онлайн обучение" />
            </figure>
            <div style={{ display: 'flex' }}>
                <h3>
                    <span>ОФЛАЙН</span> ОБУЧЕНИЕ <OneStarIcon />
                </h3>
                <div>
                    <ul>
                        Почему вам это подойдет
                        <li>живое взаимодействие с группой</li>
                        <li>больше дисциплины</li>
                        <li>мотивирующая обстановка</li>
                        <li>комфортный офис в шаговой доступности от метро (рядом есть парковка)</li>
                        <li>постоянная поддержка личного ментора</li>
                    </ul>
                </div>
            </div>
            <div>
                <ArrowButtonIcon />
            </div>
            <figure style={{ width: '100%' }}>
                <img src={offLinePhoto} alt="офлайн обучение" />
            </figure>
            <FeedbackComponent />
        </div>
    );
};

import React from 'react';
import { FeedbackComponent } from '../../Features';
import { ArrowButtonIcon, OneStarIcon } from '../../Shared';
import { Link } from 'react-router-dom';
import { path } from '../../Features/RouterComponent/config/config';
import onLinePhoto from '../../Shared/img/offlineCoursesPhoto.svg';
import offLinePhoto from '../../Shared/img/onlineCoursesPhoto.svg';
import styles from './CoursesPage.module.scss';

export const CoursesPage = () => {
    return (
        <div>
            <h2 className={styles.title}>Курсы</h2>
            <p className={styles.description}>
                Наша программа разработана ведущими IT-специалистами, которые 4+ года работали с новичками в IT
            </p>
            <div style={{ display: 'flex' }}>
                <div>
                    <h3 className={styles.typeCourse}>
                        <span>ОНЛАЙН</span> <span>ОБУЧЕНИЕ</span>
                    </h3>
                    <OneStarIcon />
                </div>
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
                <Link to={path.online}>
                    <ArrowButtonIcon />
                </Link>
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
                <Link to={path.offline}>
                    <ArrowButtonIcon />
                </Link>
            </div>
            <figure style={{ width: '100%' }}>
                <img src={offLinePhoto} alt="офлайн обучение" />
            </figure>
            <FeedbackComponent />
        </div>
    );
};
